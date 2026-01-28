#!/usr/bin/env python3
"""
Post-process ch08.ptx to fix remaining XML issues
"""

import re

def fix_xml(content):
    """Fix remaining XML issues"""
    
    # Remove unconverted LaTeX commands
    content = re.sub(r'\\end\{nexercise\}\s*\\end\{exercisewrap\}', '', content)
    content = re.sub(r'\\begin\{nexercise\}', '', content)
    content = re.sub(r'\\begin\{exercisewrap\}', '', content)
    content = re.sub(r'\\end\{exercisewrap\}', '', content)
    content = re.sub(r'\\end\{nexercise\}', '', content)
    content = re.sub(r'\\newpage', '', content)
    content = re.sub(r'\\footnotetext\{', '<fn>', content)
    # Close footnotes - count braces
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        if '<fn>' in line and line.count('{') > line.count('}'):
            # Find the closing brace
            pass
        # For simple case, just replace }
        if '<fn>' in line:
            # Simple replacement for now
            line = line.replace('<fn>', '<fn>').rstrip()
            # Try to close the footnote if we can
            if line.endswith('}'):
                line = line[:-1] + '</fn>'
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)
    
    # Remove \data{} commands
    content = re.sub(r'\\data\{([^}]*)\}', r'\1', content)
    
    # Remove remaining \begin{...} and \end{...} from within paragraphs
    content = re.sub(r'\\begin\{parts\}', '', content)
    content = re.sub(r'\\end\{parts\}', '', content)
    content = re.sub(r'\\begin\{center\}', '', content)
    content = re.sub(r'\\end\{center\}', '', content)
    content = re.sub(r'\\begin\{minipage\}[^\n]*', '', content)
    content = re.sub(r'\\end\{minipage\}', '', content)
    
    # Remove \FigureFullPath commands (these should have been converted)
    content = re.sub(r'\\FigureFullPath\[[^\]]*\]\{[^}]*\}\{[^}]*\}', '<!-- Figure not converted -->', content)
    
    # Remove remaining \hspace, \vspace
    content = re.sub(r'\\hspace\*?\{[^}]*\}', '', content)
    content = re.sub(r'\\vspace\*?\{[^}]*\}', '', content)
    
    # Remove \footfullcite
    content = re.sub(r'\\footfullcite\{[^}]*\}', '', content)
    
    # Remove captionsetup
    content = re.sub(r'\\captionsetup\{[^}]*\}', '', content)
    
    # Remove \degree
    content = re.sub(r'\\degree', '°', content)
    
    # Remove \raggedright
    content = re.sub(r'\\raggedright', '', content)
    
    # Clean up empty paragraphs with just }
    content = re.sub(r'<p>\s*\}\s*</p>', '', content)
    content = re.sub(r'<p>\s*%[^\n]*</p>', '', content)
    
    # Fix caption issues
    content = re.sub(r'<caption>([^<]*?)\\vspace\{[^}]*\}', r'<caption>\1', content)
    
    return content

def main():
    """Main entry point"""
    input_file = 'source/ch08.ptx'
    output_file = 'source/ch08.ptx'
    
    print("Post-processing ch08.ptx...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = fix_xml(content)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Done!")

if __name__ == '__main__':
    main()
