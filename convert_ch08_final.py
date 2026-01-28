#!/usr/bin/env python3
"""
Complete LaTeX to PreTeXt XML converter for Chapter 8 - Introduction to linear regression
Processes all section files including inlined subsection content
"""

import re
import os

class LaTeXToPreTeXtConverter:
    def __init__(self, base_path):
        self.base_path = base_path
        self.output = []
        self.para_buffer = []
        
        # State tracking
        self.in_section = False
        self.in_subsection = False
        self.in_introduction = False
        self.in_nexample = False
        self.in_examplewrap = False
        self.in_onebox = False
        self.in_figure = False
        self.in_quote = False
        self.in_blockquote = False
        self.in_exercise = False
        self.in_table = False
        self.in_display_math = False
        self.skip_until_end = None
        self.list_stack = []
        self.pending_label = None
        
        # Macro storage for \newcommand definitions
        self.macros = {}
        
        # Indentation level
        self.indent_level = 2
    
    def get_indent(self):
        return '  ' * self.indent_level
    
    def escape_math_content(self, text):
        """Escape XML special characters in math content"""
        if not text:
            return text
        text = text.replace('&', '&amp;')
        text = text.replace('<', '&lt;')
        text = text.replace('>', '&gt;')
        return text
    
    def extract_macro(self, line):
        """Extract \newcommand definitions and store them"""
        match = re.match(r'\\newcommand\{\\([^}]+)\}\{([^}]*)\}', line)
        if match:
            macro_name = match.group(1)
            macro_value = match.group(2)
            self.macros[macro_name] = macro_value
            return True
        return False
    
    def expand_macros(self, text):
        """Expand known macros in text"""
        if not text:
            return text
        # Expand stored macros
        for macro_name, macro_value in self.macros.items():
            text = text.replace(f'\\{macro_name}{{}}', macro_value)
            text = text.replace(f'\\{macro_name}', macro_value)
        return text
    
    def flush_paragraph(self):
        """Flush accumulated paragraph text"""
        if self.para_buffer:
            text = ' '.join(self.para_buffer).strip()
            if text and not text.startswith('<') and not text.startswith('%'):
                # Expand macros first
                text = self.expand_macros(text)
                # Clean up any remaining LaTeX commands
                text = re.sub(r'\\D\{[^}]*\}', '', text)
                text = re.sub(r'\\oiRedirect\{[^}]*\}\{([^}]*)\}', r'\1', text)
                # Clean up \resp{} command - used for response options
                text = re.sub(r'\\resp\{([^}]+)\}', r'"\1"', text)
                if text.strip():
                    self.output.append(f"{self.get_indent()}<p>{text}</p>")
            self.para_buffer = []
    
    def process_inline_markup(self, text):
        """Process inline markup conversions"""
        if not text or not text.strip():
            return text
        
        # Skip if entire text is already a single complete XML element
        stripped = text.strip()
        if (stripped.startswith('<') and stripped.endswith('>') and 
            stripped.count('<') == stripped.count('>') == 2 and
            '>' in stripped[1:]):  # Ensure there's a closing tag
            return text
        
        # Expand macros first
        text = self.expand_macros(text)
        
        # Store math temporarily to protect it
        math_placeholders = []
        
        def clean_math_content(content):
            """Clean LaTeX layout commands from math content"""
            content = re.sub(r'\\hfill\s*', ' ', content)
            content = re.sub(r'\\hspace\*?\{[^}]+\}', '', content)
            content = re.sub(r'\\vspace\*?\{[^}]+\}', '', content)
            content = re.sub(r'\\begin\{minipage\}(?:\[[^\]]*\])?\{[^}]*\}', '', content)
            content = re.sub(r'\\end\{minipage\}', '', content)
            return content
        
        # Display math
        def store_display_math(match):
            idx = len(math_placeholders)
            content = clean_math_content(match.group(1))
            math_placeholders.append(('me', content))
            return f"__MATH_DISPLAY_{idx}__"
        
        text = re.sub(r'\$\$(.*?)\$\$', store_display_math, text, flags=re.DOTALL)
        text = re.sub(r'\\\[(.*?)\\\]', store_display_math, text, flags=re.DOTALL)
        
        # Inline math
        def store_inline_math(match):
            idx = len(math_placeholders)
            content = clean_math_content(match.group(1))
            math_placeholders.append(('m', content))
            return f"__MATH_INLINE_{idx}__"
        
        text = re.sub(r'\$([^\$]+?)\$', store_inline_math, text)
        
        # Convert qt/qtq commands (question titles) - just extract content
        text = re.sub(r'\\qt\{([^}]+)\}', r'\1', text)
        text = re.sub(r'\\qtq\{([^}]+)\}', r'\1', text)
        
        # Convert term commands
        text = re.sub(r'\\term\{([^}]+)\}', r'<term>\1</term>', text)
        text = re.sub(r'\\hiddenterm\{([^}]+)\}', r'<term>\1</term>', text)
        text = re.sub(r'\\termsub\{([^}]+)\}\{[^}]*\}', r'<term>\1</term>', text)
        
        # Convert resp command (response options)
        text = re.sub(r'\\resp\{([^}]+)\}', r'"\1"', text)
        
        # Convert emphasis
        text = re.sub(r'\\emph\{([^}]+)\}', r'<em>\1</em>', text)
        text = re.sub(r'\\textbf\{([^}]+)\}', r'<alert>\1</alert>', text)
        text = re.sub(r'\\textit\{([^}]+)\}', r'<em>\1</em>', text)
        text = re.sub(r'\\texttt\{([^}]+)\}', r'<c>\1</c>', text)
        
        # Convert special characters
        text = re.sub(r'\\%', ' percent', text)
        text = re.sub(r'\\&', '&amp;', text)
        text = re.sub(r'\\textasciitilde', '~', text)
        text = re.sub(r'\\_', '_', text)
        text = re.sub(r'\\us\{\}', '_', text)
        text = re.sub(r'\\"o', 'ö', text)
        text = re.sub(r'\\"u', 'ü', text)
        text = re.sub(r'\\"a', 'ä', text)
        text = re.sub(r'\\"{o}', 'ö', text)
        text = re.sub(r'\\"{u}', 'ü', text)
        text = re.sub(r'\\"{a}', 'ä', text)
        
        # Convert quotes
        text = re.sub(r'``', '"', text)
        text = re.sub(r"''", '"', text)
        
        # Convert references
        text = re.sub(r'Chapter~\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        text = re.sub(r'Section~\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        text = re.sub(r'Figure~\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        text = re.sub(r'Table~\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        text = re.sub(r'Example~\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        text = re.sub(r'\\ref\{([^}]+)\}', r'<xref ref="\1"/>', text)
        
        # Convert footnotes (handle nested braces better)
        def convert_footnote(match):
            fn_text = match.group(1)
            fn_text = self.process_inline_markup(fn_text)
            return f'<fn>{fn_text}</fn>'
        
        # Simple footnotes only
        text = re.sub(r'\\footnote\{([^{}]+)\}', convert_footnote, text)
        
        # Remove LaTeX formatting commands
        text = re.sub(r'\\noindent\s*', '', text)
        text = re.sub(r'\\vspace\*?\{[^}]+\}', '', text)
        text = re.sub(r'\\hspace\*?\{[^}]+\}', '', text)
        text = re.sub(r'\\hfill\s*', ' ', text)
        text = re.sub(r'\\begin\{minipage\}(?:\[[^\]]*\])?\{[^}]*\}', '', text)
        text = re.sub(r'\\end\{minipage\}', '', text)
        text = re.sub(r'\\setlength\{[^}]+\}\{[^}]+\}', '', text)
        text = re.sub(r'\\captionsetup\{[^}]*\}', '', text)
        text = re.sub(r'\\footnotetext\{[^}]*\}', '', text)
        text = re.sub(r'\\index\{[^}]*\}', '', text)
        text = re.sub(r'\\label\{[^}]+\}', '', text)
        text = re.sub(r'\\stdvspace\{\}', '', text)
        text = re.sub(r'\\mbox\{([^}]+)\}', r'\1', text)
        text = re.sub(r'\\oiRedirect\{[^}]*\}\{([^}]*)\}', r'\1', text)
        text = re.sub(r'\\R\{\}', 'R', text)
        text = re.sub(r'\\D\{[^}]*\}', '', text)
        text = re.sub(r'\\data\{\}', 'data', text)
        
        # Convert dashes
        text = re.sub(r'---', '—', text)
        text = re.sub(r'--', '–', text)
        
        # Convert special spacing
        text = re.sub(r'~', ' ', text)
        
        # Restore math
        for idx, (tag, content) in enumerate(math_placeholders):
            content = self.escape_math_content(content)
            if tag == 'me':
                text = text.replace(f"__MATH_DISPLAY_{idx}__", f'<{tag}>{content}</{tag}>')
            else:
                text = text.replace(f"__MATH_INLINE_{idx}__", f'<{tag}>{content}</{tag}>')
        
        # Escape any remaining special XML characters that aren't part of tags
        # This handles cases like raw & in tabular environments
        def escape_outside_tags(text):
            """Escape special characters outside of XML tags"""
            # Split text by XML tags, keeping the tags
            parts = re.split(r'(<[^>]+>)', text)
            result = []
            for part in parts:
                if part.startswith('<') and part.endswith('>'):
                    # This is a tag, keep it as-is
                    result.append(part)
                else:
                    # This is content outside tags, escape special chars
                    # But don't double-escape already escaped entities
                    escaped = part
                    # Only escape & if it's not part of an entity like &amp; &lt; &gt;
                    escaped = re.sub(r'&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)', '&amp;', escaped)
                    # Don't escape < or > as they should already be in tags or escaped
                    # Actually, any literal < or > outside tags needs escaping
                    # But we need to be careful not to double-escape
                    result.append(escaped)
            return ''.join(result)
        
        text = escape_outside_tags(text)
        
        # Clean up multiple spaces
        text = re.sub(r'\s+', ' ', text)
        text = text.strip()
        
        return text
    
    def convert_display_math_environment(self, env_name, lines, i):
        """Convert display math environments (eqnarray*, align*, eqnarray) to PreTeXt"""
        self.flush_paragraph()
        self.in_display_math = True
        math_lines = []
        i += 1
        
        end_pattern = f'\\end{{{env_name}}}'
        while i < len(lines) and not lines[i].strip().startswith(end_pattern):
            ml = lines[i].strip()
            if ml and not ml.startswith('%'):
                math_lines.append(ml)
            i += 1
        
        # Combine and split by \\ for multiple rows
        combined = ' '.join(math_lines)
        # Split on \\ but preserve alignment markers (&)
        equations = [eq.strip() for eq in combined.split('\\\\') if eq.strip()]
        
        if len(equations) > 1:
            self.output.append(f'{self.get_indent()}<md>')
            for eq in equations:
                # Clean up but preserve alignment markers for now
                eq = re.sub(r'\s*&\s*', ' ', eq)  # Replace alignment markers with spaces
                eq = re.sub(r'&\s*$', '', eq)  # Remove trailing &
                if eq.strip():
                    eq_escaped = self.escape_math_content(eq.strip())
                    self.output.append(f'{self.get_indent()}  <mrow>{eq_escaped}</mrow>')
            self.output.append(f'{self.get_indent()}</md>')
        elif equations:
            eq = equations[0]
            eq = re.sub(r'\s*&\s*', ' ', eq)
            eq_escaped = self.escape_math_content(eq.strip())
            self.output.append(f'{self.get_indent()}<me>{eq_escaped}</me>')
        
        self.in_display_math = False
        return i + 1
    
    def convert_table_environment(self, lines, i):
        """Convert tabular environment to PreTeXt"""
        self.flush_paragraph()
        self.in_table = True
        table_lines = []
        i += 1
        
        # Collect table content
        while i < len(lines) and not lines[i].strip().startswith('\\end{tabular}'):
            tl = lines[i].strip()
            if tl and not tl.startswith('%') and not tl.startswith('\\hline'):
                table_lines.append(tl)
            i += 1
        
        if table_lines:
            self.output.append(f'{self.get_indent()}<tabular>')
            
            # Process each row
            for tline in table_lines:
                # Split by \\ for multiple rows in one line
                rows = [r.strip() for r in tline.split('\\\\') if r.strip()]
                for row in rows:
                    # Split by & for cells
                    cells = [c.strip() for c in row.split('&')]
                    if cells and any(c for c in cells):  # Has non-empty content
                        self.output.append(f'{self.get_indent()}  <row>')
                        for cell in cells:
                            cell_content = self.process_inline_markup(cell)
                            self.output.append(f'{self.get_indent()}    <cell>{cell_content}</cell>')
                        self.output.append(f'{self.get_indent()}  </row>')
            
            self.output.append(f'{self.get_indent()}</tabular>')
        
        self.in_table = False
        return i + 1
    
    def convert_parts_environment(self, lines, i):
        """Convert parts environment to ordered list"""
        self.flush_paragraph()
        self.output.append(f'{self.get_indent()}<ol>')
        self.list_stack.append('parts')
        self.indent_level += 1
        i += 1
        
        # Process until \end{parts}
        while i < len(lines) and not lines[i].strip().startswith('\\end{parts}'):
            line = lines[i]
            stripped = line.strip()
            
            # Handle \item in parts
            if stripped.startswith('\\item'):
                self.flush_paragraph()
                item_text = stripped[5:].strip()
                
                # Collect multi-line items
                j = i + 1
                while j < len(lines):
                    next_line = lines[j].strip()
                    if not next_line or next_line.startswith('%'):
                        j += 1
                        continue
                    if next_line.startswith(('\\item', '\\end{parts}')):
                        break
                    # Check for nested environments
                    if next_line.startswith('\\begin{'):
                        break
                    item_text += ' ' + next_line
                    j += 1
                
                item_text = self.process_inline_markup(item_text)
                if item_text:
                    self.output.append(f'{self.get_indent()}<li>')
                    self.output.append(f'{self.get_indent()}  <p>{item_text}</p>')
                    self.output.append(f'{self.get_indent()}</li>')
                i = j
                continue
            
            i += 1
        
        self.indent_level -= 1
        self.list_stack.pop()
        self.output.append(f'{self.get_indent()}</ol>')
        
        return i + 1
    
    def process_file(self, file_path):
        """Process a LaTeX file and return its content"""
        print(f"  Processing: {file_path}")
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        return self.convert_lines(content.split('\n'))
    
    def convert_lines(self, lines):
        """Convert lines of LaTeX"""
        i = 0
        
        while i < len(lines):
            line = lines[i]
            stripped = line.strip()
            
            # Skip exercises blocks
            if self.skip_until_end:
                if stripped.startswith(f'\\end{{{self.skip_until_end}}}') or '}{' in stripped:
                    self.skip_until_end = None
                i += 1
                continue
            
            # Handle eoce exercises - convert to exercise blocks
            if stripped.startswith('\\eoce{'):
                self.flush_paragraph()
                
                # Extract the exercise content
                # Format: \eoce{content}{}
                eoce_text = stripped
                
                # Collect multi-line eoce command until we have balanced braces
                brace_count = eoce_text.count('{') - eoce_text.count('}')
                while brace_count > 0 and i < len(lines) - 1:
                    i += 1
                    eoce_text += ' ' + lines[i].strip()
                    brace_count = eoce_text.count('{') - eoce_text.count('}')
                
                # Try to parse: \eoce{content}{}
                # Find the content between first pair of braces (handle nested braces)
                start_idx = eoce_text.find('{')
                if start_idx >= 0:
                    depth = 0
                    content_start = start_idx + 1
                    content_end = content_start
                    
                    for j in range(start_idx, len(eoce_text)):
                        if eoce_text[j] == '{':
                            depth += 1
                        elif eoce_text[j] == '}':
                            depth -= 1
                            if depth == 0:
                                content_end = j
                                break
                    
                    if content_end > content_start:
                        content = eoce_text[content_start:content_end].strip()
                        
                        # Try to extract a title from \qt{} or \qtq{} at the start
                        title = ''
                        xml_id = ''
                        
                        # Handle \qt{title with label} or \qtq{title with label}
                        # Need to handle nested braces in title
                        qt_start = -1
                        qt_cmd = ''
                        if content.startswith('\\qt{'):
                            qt_start = 3
                            qt_cmd = '\\qt'
                        elif content.startswith('\\qtq{'):
                            qt_start = 4
                            qt_cmd = '\\qtq'
                        
                        if qt_start > 0:
                            # Find matching closing brace for \qt{ or \qtq{
                            depth = 0
                            title_start = qt_start + 1
                            title_end = title_start
                            
                            for j in range(qt_start, len(content)):
                                if content[j] == '{':
                                    depth += 1
                                elif content[j] == '}':
                                    depth -= 1
                                    if depth == 0:
                                        title_end = j
                                        break
                            
                            if title_end > title_start:
                                title_with_label = content[title_start:title_end].strip()
                                content = content[title_end+1:].strip()
                                
                                # Extract label from title if present
                                label_match = re.search(r'\\label\{([^}]+)\}', title_with_label)
                                if label_match:
                                    xml_id = label_match.group(1)
                                    title = re.sub(r'\\label\{[^}]+\}', '', title_with_label).strip()
                                else:
                                    title = title_with_label
                        
                        # Build exercise
                        self.in_exercise = True
                        if xml_id:
                            self.output.append(f'{self.get_indent()}<exercise xml:id="{xml_id}">')
                        else:
                            self.output.append(f'{self.get_indent()}<exercise>')
                        
                        if title:
                            title_processed = self.process_inline_markup(title)
                            self.output.append(f'{self.get_indent()}  <title>{title_processed}</title>')
                        
                        self.indent_level += 1
                        self.output.append(f'{self.get_indent()}<statement>')
                        
                        # Process content - may have multiple paragraphs
                        if content:
                            # Just wrap in a paragraph for now - complex structure handled elsewhere
                            content_processed = self.process_inline_markup(content)
                            if content_processed:
                                self.output.append(f'{self.get_indent()}  <p>{content_processed}</p>')
                        
                        self.output.append(f'{self.get_indent()}</statement>')
                        self.indent_level -= 1
                        self.output.append(f'{self.get_indent()}</exercise>')
                        self.output.append('')
                        self.in_exercise = False
                
                i += 1
                continue
            
            # Skip exercisesheader
            if stripped.startswith('\\exercisesheader'):
                i += 1
                continue
            
            # Handle input commands - inline subsection files but skip exercises
            if '\\input{' in stripped:
                match = re.search(r'\\input\{([^}]+)\}', stripped)
                if match:
                    input_file = match.group(1)
                    # Skip exercise files
                    if 'exercise' in input_file.lower() or 'review' in input_file.lower():
                        i += 1
                        continue
                    # Process other included files
                    # Path in LaTeX is relative to project root
                    project_root = os.path.dirname(os.path.dirname(self.base_path))
                    full_path = os.path.join(project_root, input_file)
                    if os.path.exists(full_path):
                        self.process_file(full_path)
                    else:
                        print(f"  WARNING: File not found: {full_path}")
                i += 1
                continue
            
            # Skip exercise blocks
            if stripped.startswith('\\begin{exercisewrap}'):
                self.skip_until_end = 'exercisewrap'
                i += 1
                continue
            
            if stripped.startswith('\\begin{nexercise}'):
                self.skip_until_end = 'nexercise'
                i += 1
                continue
            
            # Skip examplewrap tags (but process content)
            if stripped.startswith('\\begin{examplewrap}') or stripped.startswith('\\end{examplewrap}'):
                i += 1
                continue
            
            # Skip preamble - but extract macros first
            if stripped.startswith('\\newcommand'):
                self.extract_macro(stripped)
                i += 1
                continue
            
            if stripped.startswith(('\\begin{chapterpage}', '\\end{chapterpage}',
                                  '\\chaptertitle', '\\chaptersection',
                                  '\\renewcommand')):
                i += 1
                continue
            
            # Skip comments
            if stripped.startswith('%'):
                i += 1
                continue
            
            # Capture standalone labels (will be used by next section/subsection)
            if stripped.startswith('\\label{') and not self.pending_label:
                label_match = re.search(r'\\label\{([^}]+)\}', stripped)
                if label_match:
                    self.pending_label = label_match.group(1)
                i += 1
                continue
            
            # Chapter introduction
            if stripped.startswith('\\chapterintro{'):
                self.flush_paragraph()
                intro_text = stripped[14:]
                
                # Collect multi-line
                while not intro_text.endswith('}') and i < len(lines) - 1:
                    i += 1
                    intro_text += ' ' + lines[i].strip()
                
                intro_text = intro_text.rstrip('}')
                
                # Split on \\ for paragraphs
                paras = [p.strip() for p in intro_text.split('\\\\') if p.strip()]
                
                if not self.in_introduction:
                    self.output.append('  <introduction>')
                    self.in_introduction = True
                    self.indent_level = 2
                
                for p in paras:
                    if p and not p.startswith('%'):
                        processed = self.process_inline_markup(p)
                        if processed:
                            self.output.append(f'    <p>{processed}</p>')
                
                i += 1
                continue
            
            # Section (handle both \section{} and \section[]{} formats)
            if stripped.startswith('\\section'):
                self.flush_paragraph()
                
                # Close previous structures
                if self.in_subsection:
                    self.output.append('  </subsection>')
                    self.in_subsection = False
                if self.in_section:
                    self.output.append('  </section>')
                    self.in_section = False
                if self.in_introduction:
                    self.output.append('  </introduction>')
                    self.in_introduction = False
                
                # Handle both \section{title} and \section[short]{long}
                # Collect multi-line section command
                section_text = stripped
                
                # If has [short] form, collect until we get the {...} part too
                if '\\section[' in section_text:
                    # Need to get past the [...] and collect the {...}
                    while ']' not in section_text and i < len(lines) - 1:
                        i += 1
                        section_text += ' ' + lines[i].strip()
                    # After ], we still need to collect the {...} part
                    brace_count = section_text.count('{') - section_text.count('}')
                    while brace_count <= 0 and i < len(lines) - 1:
                        # Keep collecting until we find the opening {
                        i += 1
                        section_text += ' ' + lines[i].strip()
                        brace_count = section_text.count('{') - section_text.count('}')
                        if brace_count > 0:
                            break
                
                # Now collect remaining {...} part if needed
                brace_count = section_text.count('{') - section_text.count('}')
                while brace_count > 0 and i < len(lines) - 1:
                    i += 1
                    section_text += ' ' + lines[i].strip()
                    brace_count = section_text.count('{') - section_text.count('}')
                
                # Extract title - need to handle nested braces properly
                title = ''
                if '\\section[' in section_text and ']' in section_text:
                    # Has short and long form: \section[short]{long}
                    # Find the ] that closes the short form
                    bracket_pos = section_text.index(']')
                    # Now find the matching braces for long form
                    remaining = section_text[bracket_pos+1:].lstrip()
                    if remaining.startswith('{'):
                        # Extract content between balanced braces
                        start_pos = bracket_pos + 1 + len(section_text[bracket_pos+1:]) - len(remaining)
                        depth = 0
                        start = start_pos + 1  # Skip the opening brace
                        end = start
                        for j in range(start_pos, len(section_text)):
                            ch = section_text[j]
                            if ch == '{':
                                depth += 1
                            elif ch == '}':
                                depth -= 1
                                if depth == 0:
                                    end = j
                                    break
                        if end > start:
                            title = section_text[start:end].strip()
                elif '{' in section_text:
                    # Only long form: \section{title}
                    # Find first { after \section
                    brace_pos = section_text.index('{')
                    depth = 0
                    start = brace_pos + 1
                    end = start
                    for j in range(brace_pos, len(section_text)):
                        ch = section_text[j]
                        if ch == '{':
                            depth += 1
                        elif ch == '}':
                            depth -= 1
                            if depth == 0:
                                end = j
                                break
                    if end > start:
                        title = section_text[start:end].strip()
                
                # Clean up title (remove line breaks and extra spaces)
                if title:
                    title = ' '.join(title.split())
                    title = self.process_inline_markup(title)
                
                # Look for label
                xml_id = ''
                # Check if we have a pending label
                if self.pending_label:
                    xml_id = self.pending_label
                    self.pending_label = None
                elif i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if '\\label{' in next_line:
                        label_match = re.search(r'\\label\{([^}]+)\}', next_line)
                        if label_match:
                            xml_id = label_match.group(1)
                            i += 1
                
                self.output.append('')
                if xml_id:
                    self.output.append(f'  <section xml:id="{xml_id}">')
                else:
                    self.output.append(f'  <section>')
                self.output.append(f'    <title>{title}</title>')
                self.output.append('')
                self.in_section = True
                self.indent_level = 2
                i += 1
                continue
            
            # Subsection (handle both \subsection{} and \subsection[]{} formats)  
            if stripped.startswith('\\subsection'):
                self.flush_paragraph()
                
                # Close previous subsection
                if self.in_subsection:
                    self.output.append('  </subsection>')
                    self.output.append('')
                
                # Handle both \subsection{title} and \subsection[short]{long}
                # Collect multi-line subsection command
                subsection_text = stripped
                
                # If has [short] form, collect until we get the {...} part too
                if '\\subsection[' in subsection_text:
                    # Need to get past the [...] and collect the {...}
                    while ']' not in subsection_text and i < len(lines) - 1:
                        i += 1
                        subsection_text += ' ' + lines[i].strip()
                    # After ], we still need to collect the {...} part
                    brace_count = subsection_text.count('{') - subsection_text.count('}')
                    while brace_count <= 0 and i < len(lines) - 1:
                        # Keep collecting until we find the opening {
                        i += 1
                        subsection_text += ' ' + lines[i].strip()
                        brace_count = subsection_text.count('{') - subsection_text.count('}')
                        if brace_count > 0:
                            break
                
                # Now collect remaining {...} part if needed
                brace_count = subsection_text.count('{') - subsection_text.count('}')
                while brace_count > 0 and i < len(lines) - 1:
                    i += 1
                    subsection_text += ' ' + lines[i].strip()
                    brace_count = subsection_text.count('{') - subsection_text.count('}')
                
                # Extract title - need to handle nested braces properly
                title = ''
                if '\\subsection[' in subsection_text and ']' in subsection_text:
                    # Has short and long form: \subsection[short]{long}
                    # Find the ] that closes the short form
                    bracket_pos = subsection_text.index(']')
                    # Now find the matching braces for long form
                    remaining = subsection_text[bracket_pos+1:].lstrip()
                    if remaining.startswith('{'):
                        # Extract content between balanced braces
                        start_pos = bracket_pos + 1 + len(subsection_text[bracket_pos+1:]) - len(remaining)
                        depth = 0
                        start = start_pos + 1  # Skip the opening brace
                        end = start
                        for j in range(start_pos, len(subsection_text)):
                            ch = subsection_text[j]
                            if ch == '{':
                                depth += 1
                            elif ch == '}':
                                depth -= 1
                                if depth == 0:
                                    end = j
                                    break
                        if end > start:
                            title = subsection_text[start:end].strip()
                elif '{' in subsection_text:
                    # Only long form: \subsection{title}
                    # Find first { after \subsection
                    brace_pos = subsection_text.index('{')
                    depth = 0
                    start = brace_pos + 1
                    end = start
                    for j in range(brace_pos, len(subsection_text)):
                        ch = subsection_text[j]
                        if ch == '{':
                            depth += 1
                        elif ch == '}':
                            depth -= 1
                            if depth == 0:
                                end = j
                                break
                    if end > start:
                        title = subsection_text[start:end].strip()
                
                # Clean up title (remove line breaks and extra spaces)
                if title:
                    title = ' '.join(title.split())
                    title = self.process_inline_markup(title)
                
                # Look for label
                xml_id = ''
                # Check if we have a pending label
                if self.pending_label:
                    xml_id = self.pending_label
                    self.pending_label = None
                # Check inline label in subsection command
                elif '\\label{' in stripped:
                    label_match = re.search(r'\\label\{([^}]+)\}', stripped)
                    if label_match:
                        xml_id = label_match.group(1)
                # Check next line for label
                elif i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if '\\label{' in next_line:
                        label_match = re.search(r'\\label\{([^}]+)\}', next_line)
                        if label_match:
                            xml_id = label_match.group(1)
                            i += 1
                
                if xml_id:
                    self.output.append(f'    <subsection xml:id="{xml_id}">')
                else:
                    self.output.append(f'    <subsection>')
                self.output.append(f'      <title>{title}</title>')
                self.in_subsection = True
                self.indent_level = 3
                i += 1
                continue
            
            # Example
            if stripped.startswith('\\begin{nexample}'):
                self.flush_paragraph()
                
                match = re.search(r'\\begin\{nexample\}\{([^}]*)\}', stripped)
                title = match.group(1) if match else ''
                title = self.process_inline_markup(title)
                
                # Look for label
                xml_id = ''
                label_match = re.search(r'\\label\{([^}]+)\}', stripped)
                if label_match:
                    xml_id = label_match.group(1)
                elif i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if '\\label{' in next_line:
                        label_match = re.search(r'\\label\{([^}]+)\}', next_line)
                        if label_match:
                            xml_id = label_match.group(1)
                            i += 1
                
                self.output.append(f'{self.get_indent()}<example xml:id="{xml_id}">')
                if title:
                    self.output.append(f'{self.get_indent()}  <title>{title}</title>')
                self.in_nexample = True
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{nexample}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</example>')
                self.output.append('')
                self.in_nexample = False
                i += 1
                continue
            
            # Onebox (assemblage)
            if stripped.startswith('\\begin{onebox}'):
                self.flush_paragraph()
                
                match = re.search(r'\\begin\{onebox\}\{([^}]*)\}', stripped)
                title = match.group(1) if match else ''
                title = self.process_inline_markup(title)
                
                self.output.append(f'{self.get_indent()}<assemblage>')
                if title:
                    self.output.append(f'{self.get_indent()}  <title>{title}</title>')
                self.in_onebox = True
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{onebox}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</assemblage>')
                self.output.append('')
                self.in_onebox = False
                i += 1
                continue
            
            # Lists
            if stripped.startswith('\\begin{enumerate}'):
                self.flush_paragraph()
                self.output.append(f'{self.get_indent()}<ol>')
                self.list_stack.append('ol')
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{enumerate}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</ol>')
                if self.list_stack and self.list_stack[-1] == 'ol':
                    self.list_stack.pop()
                i += 1
                continue
            
            if stripped.startswith('\\begin{itemize}'):
                self.flush_paragraph()
                self.output.append(f'{self.get_indent()}<ul>')
                self.list_stack.append('ul')
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{itemize}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</ul>')
                if self.list_stack and self.list_stack[-1] == 'ul':
                    self.list_stack.pop()
                i += 1
                continue
            
            if stripped.startswith('\\begin{description}'):
                self.flush_paragraph()
                self.output.append(f'{self.get_indent()}<dl>')
                self.list_stack.append('dl')
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{description}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</dl>')
                if self.list_stack and self.list_stack[-1] == 'dl':
                    self.list_stack.pop()
                i += 1
                continue
            
            # Parts environment (for exercise parts)
            if stripped.startswith('\\begin{parts}'):
                i = self.convert_parts_environment(lines, i)
                continue
            
            # Tabular environment
            if stripped.startswith('\\begin{tabular}'):
                i = self.convert_table_environment(lines, i)
                continue
            
            # Quote/blockquote
            if stripped.startswith('\\begin{quote}'):
                self.flush_paragraph()
                self.output.append(f'{self.get_indent()}<blockquote>')
                self.in_blockquote = True
                self.indent_level += 1
                i += 1
                continue
            
            if stripped.startswith('\\end{quote}'):
                self.flush_paragraph()
                self.indent_level -= 1
                self.output.append(f'{self.get_indent()}</blockquote>')
                self.in_blockquote = False
                i += 1
                continue
            
            # Display math environments (align*, eqnarray*, eqnarray)
            if stripped.startswith('\\begin{align*}'):
                i = self.convert_display_math_environment('align*', lines, i)
                continue
            
            if stripped.startswith('\\begin{eqnarray*}'):
                i = self.convert_display_math_environment('eqnarray*', lines, i)
                continue
            
            if stripped.startswith('\\begin{eqnarray}'):
                i = self.convert_display_math_environment('eqnarray', lines, i)
                continue
            
            # List items
            if stripped.startswith('\\item'):
                self.flush_paragraph()
                
                if self.list_stack and self.list_stack[-1] == 'dl':
                    # Description list
                    match = re.match(r'\\item\[([^\]]+)\]\s*(.*)', stripped)
                    if match:
                        term = self.process_inline_markup(match.group(1))
                        desc = match.group(2)
                        
                        self.output.append(f'{self.get_indent()}<li>')
                        self.output.append(f'{self.get_indent()}  <title>{term}</title>')
                        
                        # Collect continuation lines
                        if desc:
                            self.para_buffer.append(desc)
                        
                        j = i + 1
                        while j < len(lines):
                            next_line = lines[j].strip()
                            if not next_line:
                                self.flush_paragraph()
                                j += 1
                                continue
                            if next_line.startswith(('\\item', '\\end{')):
                                break
                            if next_line.startswith('\\begin{'):
                                break
                            self.para_buffer.append(next_line)
                            j += 1
                        
                        self.flush_paragraph()
                        self.output.append(f'{self.get_indent()}</li>')
                        i = j
                        continue
                else:
                    # Regular list item
                    item_text = stripped[5:].strip()
                    
                    # Collect multi-line items
                    j = i + 1
                    while j < len(lines):
                        next_line = lines[j].strip()
                        if not next_line:
                            break
                        if next_line.startswith(('\\item', '\\end{', '\\begin{')):
                            break
                        item_text += ' ' + next_line
                        j += 1
                    
                    item_text = self.process_inline_markup(item_text)
                    if item_text:
                        self.output.append(f'{self.get_indent()}<li>')
                        self.output.append(f'{self.get_indent()}  <p>{item_text}</p>')
                        self.output.append(f'{self.get_indent()}</li>')
                    i = j
                    continue
            
            # Figure with \Figure command
            if '\\Figure[' in stripped:
                self.flush_paragraph()
                
                # Parse \Figure[caption]{size}{ref}
                match = re.match(r'\\Figure\[([^\]]+)\]\{[^}]*\}\{([^}]+)\}', stripped)
                if match:
                    caption = self.process_inline_markup(match.group(1))
                    ref = match.group(2)
                    
                    self.output.append(f'{self.get_indent()}<figure xml:id="fig-{ref}">')
                    self.output.append(f'{self.get_indent()}  <caption>{caption}</caption>')
                    self.output.append(f'{self.get_indent()}  <image source="ch_regr_simple_linear/figures/{ref}"/>')
                    self.output.append(f'{self.get_indent()}</figure>')
                    self.output.append('')
                i += 1
                continue
            
            # FigureFullPath with \FigureFullPath[description]{size}{path}
            if '\\FigureFullPath[' in stripped:
                self.flush_paragraph()
                
                # Parse \FigureFullPath[description]{size}{path}
                match = re.match(r'\\FigureFullPath\[([^\]]+)\]\{[^}]*\}\{([^}]+)\}', stripped)
                if match:
                    description = self.process_inline_markup(match.group(1))
                    path = match.group(2)
                    
                    self.output.append(f'{self.get_indent()}<figure>')
                    self.output.append(f'{self.get_indent()}  <caption>{description}</caption>')
                    self.output.append(f'{self.get_indent()}  <image source="ch_regr_simple_linear/figures/{path}"/>')
                    self.output.append(f'{self.get_indent()}</figure>')
                    self.output.append('')
                i += 1
                continue
            
            # Figure environment
            if stripped.startswith('\\begin{figure}'):
                self.flush_paragraph()
                self.in_figure = True
                self.indent_level += 1
                
                # Collect figure content
                fig_lines = []
                i += 1
                while i < len(lines) and not lines[i].strip().startswith('\\end{figure}'):
                    fig_lines.append(lines[i])
                    i += 1
                
                # Parse figure content
                caption = ''
                label = ''
                image_ref = ''
                
                for fl in fig_lines:
                    if '\\caption{' in fl:
                        cap_match = re.search(r'\\caption\{([^}]+)\}', fl)
                        if cap_match:
                            caption = self.process_inline_markup(cap_match.group(1))
                    if '\\label{' in fl:
                        lab_match = re.search(r'\\label\{([^}]+)\}', fl)
                        if lab_match:
                            label = lab_match.group(1)
                    if '\\Figure[' in fl:
                        fig_match = re.search(r'\\Figure\[([^\]]+)\]\{[^}]*\}\{([^}]+)\}', fl)
                        if fig_match:
                            if not caption:
                                caption = self.process_inline_markup(fig_match.group(1))
                            image_ref = fig_match.group(2)
                
                if label or image_ref:
                    xml_id = label if label else f'fig-{image_ref}'
                    self.indent_level -= 1
                    self.output.append(f'{self.get_indent()}<figure xml:id="{xml_id}">')
                    if caption:
                        self.output.append(f'{self.get_indent()}  <caption>{caption}</caption>')
                    if image_ref:
                        self.output.append(f'{self.get_indent()}  <image source="ch_regr_simple_linear/figures/{image_ref}"/>')
                    self.output.append(f'{self.get_indent()}</figure>')
                    self.output.append('')
                    self.indent_level += 1
                
                self.in_figure = False
                self.indent_level -= 1
                i += 1
                continue
            
            # Empty line
            if not stripped:
                self.flush_paragraph()
                i += 1
                continue
            
            # Regular text line
            self.para_buffer.append(self.process_inline_markup(line.strip()))
            i += 1
        
        # Return line count for tracking
        return len(lines)
    
    def finalize(self):
        """Finalize conversion"""
        # Flush any remaining content
        self.flush_paragraph()
        
        # Close any open structures
        if self.in_subsection:
            self.output.append('  </subsection>')
        if self.in_section:
            self.output.append('  </section>')
        if self.in_introduction:
            self.output.append('  </introduction>')
        
        return '\n'.join(self.output)


def main():
    """Main entry point"""
    base_path = 'ch_regr_simple_linear/TeX'
    input_file = os.path.join(base_path, 'ch_regr_simple_linear.tex')
    output_file = 'source/ch08.ptx'
    
    print(f"LaTeX to PreTeXt Converter - Chapter 8")
    print(f"=" * 50)
    print(f"Input:  {input_file}")
    print(f"Output: {output_file}")
    print()
    
    converter = LaTeXToPreTeXtConverter(base_path)
    
    # Process main file
    total_lines = converter.process_file(input_file)
    
    # Finalize
    pretext_body = converter.finalize()
    
    # Create complete chapter
    output = [
        '<?xml version="1.0" encoding="UTF-8" ?>',
        '',
        '<chapter xml:id="ch-simple-linear-regression" xmlns:xi="http://www.w3.org/2001/XInclude">',
        '  <title>Introduction to linear regression</title>',
        '',
        pretext_body,
        '',
        '</chapter>'
    ]
    
    final_output = '\n'.join(output)
    output_lines = final_output.split('\n')
    
    print()
    print(f"Writing output...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_output)
    
    print()
    print(f"Conversion complete!")
    print(f"=" * 50)
    print(f"Output lines: {len(output_lines)}")
    print(f"File: {output_file}")


if __name__ == '__main__':
    main()
