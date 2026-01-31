#!/usr/bin/env python3
"""
Convert LaTeX solutions to PreTeXt format
Converts all solutions from latex/extraTeX/eoceSolutions/eoceSolutions.tex
to PreTeXt XML format in source/appendix-solutions.ptx
"""

import re
import sys


def convert_latex_to_pretext(latex_content):
    """Convert LaTeX content to PreTeXt XML format"""
    
    content = latex_content
    
    # Handle figure commands - remove them for now or convert to comments
    content = re.sub(r'\\FigureFullPath\[([^\]]+)\]\{[^}]+\}\{[^}]+\}', 
                     r'[Figure: \1]', content)
    content = re.sub(r'\\Figure\[[^\]]+\]\{[^}]+\}', '[Figure]', content)
    
    # Handle LaTeX math environments - convert to inline math or note
    # These typically need display math <md> or <me> tags in PreTeXt
    # First, protect them by replacing & with a placeholder
    def protect_math_env(match):
        math_content = match.group(1)
        # Replace & with placeholder
        math_content = math_content.replace('&', '¤AMPERSAND¤')
        return f'[Math: {math_content}]'
    
    content = re.sub(r'\\begin\{align\*\}(.*?)\\end\{align\*\}', 
                     protect_math_env, content, flags=re.DOTALL)
    content = re.sub(r'\{\\footnotesize\\begin\{align\*\}(.*?)\\end\{align\*\}\}', 
                     protect_math_env, content, flags=re.DOTALL)
    
    # Remove line breaks and clean whitespace
    content = re.sub(r'\\\\\s*\.', '.', content)  # Remove LaTeX line breaks with period
    content = re.sub(r'\\\\\s*\n', ' ', content)  # Remove LaTeX line breaks
    content = re.sub(r'\\\\', '', content)  # Remove remaining LaTeX line breaks
    content = re.sub(r'\s+', ' ', content)  # Normalize whitespace
    content = content.strip()
    
    # Replace ~ with proper space
    content = content.replace('~', ' ')
    
    # Replace \emph{} with <em></em> - handle nested braces
    def replace_emph(match):
        inner = match.group(1)
        return f'<em>{inner}</em>'
    content = re.sub(r'\\emph\{([^}]+)\}', replace_emph, content)
    
    # Replace \textbf{} with <alert></alert>
    content = re.sub(r'\\textbf\{([^}]+)\}', r'<alert>\1</alert>', content)
    
    # Replace LaTeX double quotes with <q> tags
    # Handle mixed quotes - `` with either '' or "
    content = re.sub(r'``([^"`]+)\'\'', r'<q>\1</q>', content)  # `` ... ''
    content = re.sub(r'``([^"`]+)"', r'<q>\1</q>', content)  # `` ... "
    
    # Handle regular quotes inside [Figure: ] blocks - escape them
    def escape_figure_quotes(match):
        text = match.group(1)
        text = text.replace('"', '&quot;')
        return f'[Figure: {text}]'
    content = re.sub(r'\[Figure: ([^\]]+)\]', escape_figure_quotes, content)
    
    # Handle math blocks - escape < and > but restore ¤AMPERSAND¤ back to &amp;
    def escape_math_markup(match):
        text = match.group(1)
        text = text.replace('<', '&lt;')
        text = text.replace('>', '&gt;')
        text = text.replace('¤AMPERSAND¤', '&amp;')
        return f'[Math: {text}]'
    content = re.sub(r'\[Math: ([^\]]+)\]', escape_math_markup, content)
    
    # Replace \rightarrow with proper arrow
    content = content.replace('\\rightarrow', '\\to')
    
    # Replace $...$ inline math with <m>...</m>
    # Handle nested dollar signs carefully
    def replace_math(match):
        math_content = match.group(1)
        # Escape < and > in math
        math_content = math_content.replace('<', '\\lt')
        math_content = math_content.replace('>', '\\gt')
        return f'<m>{math_content}</m>'
    content = re.sub(r'\$([^\$]+)\$', replace_math, content)
    
    # Replace special XML characters (but not in our XML tags)
    # We need to escape & to &amp; but only when it's not already part of an entity
    # and not in <m> tags
    parts = re.split(r'(<m>.*?</m>|<em>.*?</em>|<alert>.*?</alert>|<q>.*?</q>|\[Figure:[^\]]+\]|\[Math:[^\]]+\])', content)
    for i in range(len(parts)):
        # Only escape text parts, not tag parts
        if not parts[i].startswith('<') and not parts[i].startswith('['):
            # Escape ampersands that aren't already part of entities
            parts[i] = re.sub(r'&(?!amp;|lt;|gt;|quot;|apos;)', '&amp;', parts[i])
    content = ''.join(parts)
    
    # Clean up extra spaces again
    content = re.sub(r'\s+', ' ', content)
    content = content.strip()
    
    return content


def extract_braced_content(text, start_pos):
    """Extract content within braces, handling nested braces"""
    if start_pos >= len(text) or text[start_pos] != '{':
        return None, start_pos
    
    depth = 0
    i = start_pos
    result = []
    
    while i < len(text):
        char = text[i]
        if char == '{':
            depth += 1
            if depth > 1:  # Don't include the outer braces
                result.append(char)
        elif char == '}':
            depth -= 1
            if depth == 0:
                return ''.join(result), i + 1
            result.append(char)
        else:
            if depth > 0:
                result.append(char)
        i += 1
    
    return ''.join(result), i


def parse_solutions(latex_file_path):
    """Parse the LaTeX solutions file and extract all solutions by chapter"""
    
    with open(latex_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all chapter sections
    chapters = []
    chapter_pattern = r'\\eocesolch\{([^}]+)\}'
    chapter_matches = list(re.finditer(chapter_pattern, content))
    
    for i, match in enumerate(chapter_matches):
        chapter_name = match.group(1)
        start_pos = match.end()
        
        # Find the end position (start of next chapter or end of file)
        if i + 1 < len(chapter_matches):
            end_pos = chapter_matches[i + 1].start()
        else:
            end_pos = len(content)
        
        chapter_content = content[start_pos:end_pos]
        
        # Extract all solutions in this chapter
        solutions = []
        
        # Find all exercise comments and \eocesol commands
        pos = 0
        while pos < len(chapter_content):
            # Look for exercise number comment
            comment_match = re.search(r'%\s*(\d+)\s*\n', chapter_content[pos:])
            if not comment_match:
                break
            
            exercise_num = comment_match.group(1)
            comment_end = pos + comment_match.end()
            
            # Look for \eocesol{ after the comment
            eocesol_match = re.search(r'\\eocesol\s*\{', chapter_content[comment_end:])
            if not eocesol_match:
                pos = comment_end
                continue
            
            # Extract the braced content
            brace_start = comment_end + eocesol_match.end() - 1
            solution_text, _ = extract_braced_content(chapter_content, brace_start)
            
            if solution_text:
                solutions.append((exercise_num, solution_text))
            
            pos = comment_end + eocesol_match.end()
        
        chapters.append({
            'name': chapter_name,
            'solutions': solutions
        })
    
    return chapters


def create_pretext_solution(exercise_num, solution_text):
    """Create a PreTeXt solution element"""
    
    # Check if solution has multiple parts (a), (b), etc.
    parts = re.split(r'\(([a-z])\)\s*', solution_text)
    
    if len(parts) > 1 and parts[0].strip() == '':
        # Multi-part solution
        lines = []
        lines.append(f'    <solution>')
        lines.append(f'      <title>Exercise {exercise_num}</title>')
        lines.append('      <p>')
        lines.append('        <ol marker="(a)">')
        
        # Process parts
        i = 1
        while i < len(parts):
            if i + 1 < len(parts):
                letter = parts[i]
                text = parts[i + 1].strip()
                # Remove trailing period before next part
                text = re.sub(r'\.\s*$', '', text)
                converted_text = convert_latex_to_pretext(text)
                # Add period if not already there
                if not converted_text.endswith('.'):
                    converted_text += '.'
                lines.append(f'          <li>{converted_text}</li>')
                i += 2
            else:
                i += 1
        
        lines.append('        </ol>')
        lines.append('      </p>')
        lines.append('    </solution>')
        
    else:
        # Single part solution
        converted_text = convert_latex_to_pretext(solution_text)
        lines = []
        lines.append(f'    <solution>')
        lines.append(f'      <title>Exercise {exercise_num}</title>')
        lines.append(f'      <p>')
        lines.append(f'        {converted_text}')
        lines.append('      </p>')
        lines.append('    </solution>')
    
    return '\n'.join(lines)


def generate_pretext_file(chapters, output_path):
    """Generate the complete PreTeXt solutions file"""
    
    lines = []
    lines.append('<?xml version="1.0" encoding="UTF-8" ?>')
    lines.append('')
    lines.append('<appendix xmlns:xi="http://www.w3.org/2001/XInclude" xml:id="appendix-solutions">')
    lines.append('  <title>Exercise Solutions</title>')
    lines.append('')
    lines.append('  <introduction>')
    lines.append('    <p>')
    lines.append('      This appendix contains solutions to selected odd-numbered exercises from each chapter.')
    lines.append('      These solutions are provided to help you check your work and understand the problem-solving process.')
    lines.append('    </p>')
    lines.append('  </introduction>')
    lines.append('')
    
    # Chapter name mapping
    chapter_ids = {
        'Introduction to data': 'ch01',
        'Summarizing data': 'ch02',
        'Probability': 'ch03',
        'Distributions of random variables': 'ch04',
        'Foundations for inference': 'ch05',
        'Inference for categorical data': 'ch06',
        'Inference for numerical data': 'ch07',
        'Introduction to linear regression': 'ch08',
        'Multiple and logistic regression': 'ch09'
    }
    
    for chapter in chapters:
        chapter_id = chapter_ids.get(chapter['name'], 'chXX')
        lines.append(f'  <section xml:id="solutions-{chapter_id}">')
        lines.append(f'    <title>{chapter["name"].title()}</title>')
        lines.append('')
        
        for exercise_num, solution_text in chapter['solutions']:
            solution_xml = create_pretext_solution(exercise_num, solution_text)
            lines.append(solution_xml)
            lines.append('')
        
        lines.append('  </section>')
        lines.append('')
    
    lines.append('</appendix>')
    
    # Write the file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print(f"Generated PreTeXt solutions file: {output_path}")
    print(f"Total chapters: {len(chapters)}")
    total_solutions = sum(len(ch['solutions']) for ch in chapters)
    print(f"Total solutions: {total_solutions}")


def main():
    latex_file = 'latex/extraTeX/eoceSolutions/eoceSolutions.tex'
    output_file = 'source/appendix-solutions.ptx'
    
    print("Parsing LaTeX solutions file...")
    chapters = parse_solutions(latex_file)
    
    print("Generating PreTeXt XML file...")
    generate_pretext_file(chapters, output_file)
    
    print("Conversion complete!")


if __name__ == '__main__':
    main()
