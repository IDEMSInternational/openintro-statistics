#!/usr/bin/env python3
"""
Complete LaTeX to PreTeXt XML converter for Chapter 6 - Inference for categorical data
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
        self.skip_until_end = None
        self.list_stack = []
        
        # Macro storage for \newcommand definitions
        self.macros = {}
        
        # Indentation level
        self.indent_level = 2
    
    def get_indent(self):
        return '  ' * self.indent_level
    
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
        
        # Skip if already XML tag
        if text.strip().startswith('<') and '>' in text:
            return text
        
        # Expand macros first
        text = self.expand_macros(text)
        
        # Store math temporarily to protect it
        math_placeholders = []
        
        # Display math
        def store_display_math(match):
            idx = len(math_placeholders)
            math_placeholders.append(('me', match.group(1)))
            return f"__MATH_DISPLAY_{idx}__"
        
        text = re.sub(r'\$\$(.*?)\$\$', store_display_math, text, flags=re.DOTALL)
        text = re.sub(r'\\\[(.*?)\\\]', store_display_math, text, flags=re.DOTALL)
        
        # Inline math
        def store_inline_math(match):
            idx = len(math_placeholders)
            math_placeholders.append(('m', match.group(1)))
            return f"__MATH_INLINE_{idx}__"
        
        text = re.sub(r'\$([^\$]+?)\$', store_inline_math, text)
        
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
        text = re.sub(r'\\vspace\{[^}]+\}', '', text)
        text = re.sub(r'\\hspace\{[^}]+\}', '', text)
        text = re.sub(r'\\setlength\{[^}]+\}\{[^}]+\}', '', text)
        text = re.sub(r'\\index\{[^}]*\}', '', text)
        text = re.sub(r'\\label\{[^}]+\}', '', text)
        text = re.sub(r'\\stdvspace\{\}', '', text)
        text = re.sub(r'\\mbox\{([^}]+)\}', r'\1', text)
        text = re.sub(r'\\oiRedirect\{[^}]*\}\{([^}]*)\}', r'\1', text)
        text = re.sub(r'\\R\{\}', 'R', text)
        text = re.sub(r'\\D\{[^}]*\}', '', text)
        
        # Convert dashes
        text = re.sub(r'---', '—', text)
        text = re.sub(r'--', '–', text)
        
        # Convert special spacing
        text = re.sub(r'~', ' ', text)
        
        # Restore math
        for idx, (tag, content) in enumerate(math_placeholders):
            if tag == 'me':
                text = text.replace(f"__MATH_DISPLAY_{idx}__", f'<{tag}>{content}</{tag}>')
            else:
                text = text.replace(f"__MATH_INLINE_{idx}__", f'<{tag}>{content}</{tag}>')
        
        # Clean up multiple spaces
        text = re.sub(r'\s+', ' ', text)
        text = text.strip()
        
        return text
    
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
            
            # Skip exercise commands
            if stripped.startswith('\\eoce{') or stripped.startswith('\\exercisesheader'):
                # Skip until we find the closing }{}
                self.skip_until_end = 'eoce'
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
            
            # Section
            if stripped.startswith('\\section{'):
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
                
                match = re.match(r'\\section\{([^}]+)\}', stripped)
                title = match.group(1) if match else ''
                
                # Look for label
                xml_id = ''
                if i + 1 < len(lines):
                    next_line = lines[i + 1].strip()
                    if '\\label{' in next_line:
                        label_match = re.search(r'\\label\{([^}]+)\}', next_line)
                        if label_match:
                            xml_id = label_match.group(1)
                            i += 1
                
                self.output.append('')
                self.output.append(f'  <section xml:id="{xml_id}">')
                self.output.append(f'    <title>{title}</title>')
                self.output.append('')
                self.in_section = True
                self.indent_level = 2
                i += 1
                continue
            
            # Subsection
            if stripped.startswith('\\subsection{'):
                self.flush_paragraph()
                
                # Close previous subsection
                if self.in_subsection:
                    self.output.append('  </subsection>')
                    self.output.append('')
                
                match = re.match(r'\\subsection\{([^}]+)\}', stripped)
                title = match.group(1) if match else ''
                
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
                
                self.output.append(f'    <subsection xml:id="{xml_id}">')
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
            
            # Align* environment
            if stripped.startswith('\\begin{align*}'):
                self.flush_paragraph()
                math_lines = []
                i += 1
                while i < len(lines) and not lines[i].strip().startswith('\\end{align*}'):
                    ml = lines[i].strip()
                    if ml and not ml.startswith('%'):
                        math_lines.append(ml)
                    i += 1
                
                # Combine and split by \\
                combined = ' '.join(math_lines)
                equations = [eq.strip() for eq in combined.split('\\\\') if eq.strip()]
                
                if len(equations) > 1:
                    self.output.append(f'{self.get_indent()}<md>')
                    for eq in equations:
                        # Remove trailing & if present
                        eq = re.sub(r'&\s*$', '', eq)
                        self.output.append(f'{self.get_indent()}  <mrow>{eq}</mrow>')
                    self.output.append(f'{self.get_indent()}</md>')
                elif equations:
                    self.output.append(f'{self.get_indent()}<me>{equations[0]}</me>')
                
                i += 1
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
                    self.output.append(f'{self.get_indent()}  <image source="ch_foundations_for_inf/figures/{ref}"/>')
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
                        self.output.append(f'{self.get_indent()}  <image source="ch_foundations_for_inf/figures/{image_ref}"/>')
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
    base_path = 'ch_inference_for_props/TeX'
    input_file = os.path.join(base_path, 'ch_inference_for_props.tex')
    output_file = 'source/ch06.ptx'
    
    print(f"LaTeX to PreTeXt Converter - Chapter 6")
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
        '<chapter xml:id="ch-inference-props" xmlns:xi="http://www.w3.org/2001/XInclude">',
        '  <title>Inference for categorical data</title>',
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
