#!/usr/bin/env python3
r"""
Fix all remaining XML issues in ch08.ptx to make it well-formed.
This script:
1. Removes all LaTeX commands (\begin, \end, \Figure, etc.)
2. Fixes broken figure and other XML elements
3. Removes empty paragraphs
4. Validates the output with xml.etree.ElementTree
5. Writes the fixed version back to source/ch08.ptx
"""

import re
import xml.etree.ElementTree as ET
from collections import Counter

def track_tag_balance(content):
    """Track open/close tag counts to identify mismatches"""
    # Find all opening and closing tags
    opening_tags = re.findall(r'<([a-z]+(?:\:[a-z]+)?)[^/>]*(?<!/)>', content)
    closing_tags = re.findall(r'</([a-z]+(?:\:[a-z]+)?)>', content)
    
    open_counts = Counter(opening_tags)
    close_counts = Counter(closing_tags)
    
    mismatches = {}
    all_tags = set(opening_tags) | set(closing_tags)
    for tag in all_tags:
        if open_counts[tag] != close_counts[tag]:
            mismatches[tag] = {
                'open': open_counts[tag],
                'close': close_counts[tag],
                'diff': open_counts[tag] - close_counts[tag]
            }
    
    return mismatches

def fix_latex_commands(content):
    """Remove all LaTeX commands"""
    fixes_applied = []
    
    # Remove \begin{...} and \end{...} commands
    begin_patterns = [
        r'\\begin\{nexercise\}',
        r'\\begin\{exercisewrap\}',
        r'\\begin\{parts\}',
        r'\\begin\{center\}',
        r'\\begin\{minipage\}[^\n]*',
        r'\\begin\{enumerate\}',
        r'\\begin\{itemize\}',
        r'\\begin\{eqnarray\*?\}',
    ]
    
    end_patterns = [
        r'\\end\{nexercise\}',
        r'\\end\{exercisewrap\}',
        r'\\end\{parts\}',
        r'\\end\{center\}',
        r'\\end\{minipage\}',
        r'\\end\{enumerate\}',
        r'\\end\{itemize\}',
        r'\\end\{eqnarray\*?\}',
    ]
    
    for pattern in begin_patterns + end_patterns:
        count = len(re.findall(pattern, content))
        if count > 0:
            fixes_applied.append(f"Removed {count} instances of {pattern}")
            content = re.sub(pattern, '', content)
    
    # Remove figure-related LaTeX commands
    figure_patterns = [
        (r'\\FigureFullPath\[[^\]]*\]\{[^}]*\}\{[^}]*\}', 'FigureFullPath'),
        (r'\\Figure\[[^\]]*\]\{[^}]*\}\{[^}]*\}', 'Figure'),
        (r'\\Figures\[[^\]]*\]\{[^}]*\}\{[^}]*\}\{[^}]*\}', 'Figures'),
    ]
    
    for pattern, name in figure_patterns:
        count = len(re.findall(pattern, content))
        if count > 0:
            fixes_applied.append(f"Removed {count} {name} commands")
            content = re.sub(pattern, '', content)
    
    # Remove other LaTeX commands - more carefully
    # Handle incomplete \vspace and \hspace commands (without closing brace)
    # These need to be removed before trying to match complete ones
    incomplete_space = [
        (r'\\vspace\*?\{[^}]*$', 'incomplete vspace at end of line'),
        (r'\\hspace\*?\{[^}]*$', 'incomplete hspace at end of line'),
    ]
    
    for pattern, name in incomplete_space:
        lines = content.split('\n')
        fixed_lines = []
        count = 0
        for line in lines:
            if re.search(pattern, line):
                line = re.sub(pattern, '', line)
                count += 1
            fixed_lines.append(line)
        if count > 0:
            content = '\n'.join(fixed_lines)
            fixes_applied.append(f"Removed {count} {name}")
    
    other_commands = [
        (r'\\captionsetup\{[^}]*\}', 'captionsetup'),
        (r'\\footfullcite\{[^}]*\}', 'footfullcite'),
        (r'\\newpage\b', 'newpage'),
        (r'\\D\{[^}]*\}', 'D{}'),
        (r'\\data\{([^}]*)\}', 'data{}'),
        (r'\\var\{([^}]*)\}', 'var{}'),
        (r'\\hspace\*?\{[^}]*\}', 'hspace'),  # Complete ones only
        (r'\\vspace\*?\{[^}]*\}', 'vspace'),  # Complete ones only
        (r'\\raggedright\b', 'raggedright'),
        (r'\\noindent\b', 'noindent'),
        (r'\\degree\b', 'degree'),
        (r'\\setlength\{[^}]+\}\{[^}]+\}', 'setlength'),
        (r'\\vref\{([^}]+)\}', 'vref'),
    ]
    
    # Handle \footnotetext separately - just remove the command, keep content
    # Simple approach: remove <p>\footnotetext{
    footnote_pattern = r'<p>\\footnotetext\{'
    count = len(re.findall(footnote_pattern, content))
    if count > 0:
        content = re.sub(footnote_pattern, '<p>', content)
        fixes_applied.append(f"Removed {count} footnotetext markers")
    
    for pattern, name in other_commands:
        count = len(re.findall(pattern, content))
        if count > 0:
            # Special handling for some commands
            if name == 'data{}':
                content = re.sub(r'\\data\{([^}]*)\}', r'\1', content)
                fixes_applied.append(f"Converted {count} \\data{{}} commands to plain text")
            elif name == 'var{}':
                content = re.sub(r'\\var\{([^}]*)\}', r'\1', content)
                fixes_applied.append(f"Converted {count} \\var{{}} commands to plain text")
            elif name == 'vref':
                content = re.sub(r'\\vref\{([^}]+)\}', r'<xref ref="\1"/>', content)
                fixes_applied.append(f"Converted {count} \\vref to xref")
            else:
                content = re.sub(pattern, '', content)
                fixes_applied.append(f"Removed {count} {name} commands")
    
    return content, fixes_applied

def fix_broken_captions(content):
    """Fix broken caption elements"""
    fixes_applied = []
    
    # Fix captions with incomplete \vspace (missing closing brace before </caption>)
    # Pattern: <caption>...\vspace{-1mm</caption>
    pattern = r'(<caption>[^<]*?)\\vspace\{([^}]*)(?=</caption>)'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'\1', content)
        fixes_applied.append(f"Fixed {count} captions with incomplete \\vspace")
    
    # Fix captions with complete \vspace
    pattern = r'(<caption>[^<]*?)\\vspace\*?\{[^}]*\}'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'\1', content)
        fixes_applied.append(f"Fixed {count} captions with \\vspace")
    
    # Fix captions that are split across lines with image tags
    # Pattern: <caption>...\vspace{-1mm</caption>\n<image
    pattern = r'(<caption>[^<]*?)\\vspace\{[^}]*</caption>\s*(<image)'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'\1</caption>\n        \2', content)
        fixes_applied.append(f"Fixed {count} captions split with image tags")
    
    # Fix captions where closing tag is missing and next line has image
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        if '<caption>' in line and '</caption>' not in line:
            # Check next line for image or other XML tag
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if next_line.startswith('<image') or next_line.startswith('</figure'):
                    # Need to close caption on this line
                    # Remove any trailing LaTeX or incomplete tags
                    line = re.sub(r'\\vspace\{[^}]*$', '', line)
                    line = re.sub(r'\\[a-zA-Z]+\{[^}]*$', '', line)
                    if not line.rstrip().endswith('</caption>'):
                        line = line.rstrip() + '</caption>'
                        fixes_applied.append(f"Added missing </caption> at line {i+1}")
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)
    
    return content, fixes_applied

def fix_empty_paragraphs(content):
    """Remove empty paragraphs and paragraphs with only problematic content"""
    fixes_applied = []
    
    patterns = [
        (r'<p>\s*\}\s*</p>', 'paragraphs with only }'),
        (r'<p>\s*%[^\n]*\s*</p>', 'paragraphs with only comments'),
        (r'<p>\s*</p>', 'empty paragraphs'),
        (r'<p>\\newpage</p>', 'newpage paragraphs'),
    ]
    
    for pattern, desc in patterns:
        count = len(re.findall(pattern, content))
        if count > 0:
            content = re.sub(pattern, '', content)
            fixes_applied.append(f"Removed {count} {desc}")
    
    # Fix paragraphs ending with stray closing braces like "...?} Text"
    # Remove the } that's left over from LaTeX commands
    pattern = r'(\?)\}\s+'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'\1 ', content)
        fixes_applied.append(f"Removed {count} stray closing braces after ?")
    
    # Fix paragraphs with stray "/> from incomplete xref tags
    pattern = r'(\?)"\/>\s+'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'\1 ', content)
        fixes_applied.append(f"Removed {count} stray \"/> after ?")
    
    return content, fixes_applied

def fix_broken_examples(content):
    """Fix broken example elements with incomplete titles or structure"""
    fixes_applied = []
    
    # Fix titles with incomplete \vref (missing closing brace before </title>)
    # Pattern: <title>...\\vref{id</title> should be <title>...reference</title>
    pattern = r'<title>([^<]*?)\\vref\{([^}]*)(?=</title>)'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<title>\1reference', content)
        fixes_applied.append(f"Fixed {count} example titles with incomplete \\vref")
    
    # Fix titles with incomplete xref (xref that wasn't closed before </title>)
    # Pattern: <title>...<xref ref="id</title> should have closing />
    pattern = r'<xref ref="([^"]*?)(?=</title>)'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<xref ref="\1"/>', content)
        fixes_applied.append(f"Fixed {count} example titles with incomplete xref")
    
    # Fix example titles with \vref or Figure \ref
    pattern = r'<title>([^<]*?)Figure \\ref\{([^}]+)\}'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<title>\1Example</title>\n        <p>Figure reference', content)
        fixes_applied.append(f"Fixed {count} example titles with Figure \\ref")
    
    # Fix titles with Examine Figure \vref
    pattern = r'<title>Examine Figure \\vref\{([^}]+)\}'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<title>Examine figure</title>', content)
        fixes_applied.append(f"Fixed {count} example titles with \\vref")
    
    # Fix titles containing \ref
    pattern = r'<title>([^<]*?)\\ref\{([^}]+)\}([^<]*?)</title>'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<title>\1reference\3</title>', content)
        fixes_applied.append(f"Fixed {count} example titles with \\ref")
    
    # Fix titles that are broken and contain content meant for <p>
    # Pattern: <title>...Some long text...</title> where text should be in <p>
    pattern = r'<title>([^<]{200,}?)</title>'
    matches = re.findall(pattern, content)
    if matches:
        # This is complex - try to split at sentence boundaries
        def split_long_title(match):
            text = match.group(1)
            # Look for first sentence-like ending or question mark
            for splitter in ['. ', '? ', '} ']:
                if splitter in text[:100]:
                    parts = text.split(splitter, 1)
                    if len(parts) == 2:
                        return f'<title>{parts[0]}{splitter[:-1]}</title>\n        <p>{parts[1]}'
            # If no good split point, just keep first 100 chars
            return f'<title>{text[:100]}...</title>\n        <p>{text[100:]}'
        
        content = re.sub(r'<title>([^<]{200,}?)</title>', split_long_title, content)
        fixes_applied.append(f"Split {len(matches)} overly long titles")
    
    return content, fixes_applied

def fix_structure_issues(content):
    """Fix structural XML issues including missing figure/caption content"""
    fixes_applied = []
    
    # Fix figures missing <image> tag
    pattern = r'(<figure[^>]*>\s*</figure>)'
    count = len(re.findall(pattern, content))
    if count > 0:
        # Leave empty figures as-is for now
        fixes_applied.append(f"Found {count} empty figures (leaving as-is)")
    
    # Fix paragraphs that start with text meant to be elsewhere
    # Pattern: <p>head length of a possum besides its length?}
    # This suggests incomplete conversion where question was split
    pattern = r'<p>([a-z][^.!?]*?\?\})'
    matches = re.findall(pattern, content)
    if matches:
        content = re.sub(r'<p>([a-z][^.!?]*?\?\})\s*([A-Z])', r'<!-- Incomplete: \1 -->\n      <p>\2', content)
        fixes_applied.append(f"Fixed {len(matches)} paragraphs starting with incomplete text")
    
    return content, fixes_applied

def fix_unclosed_tags(content):
    """Fix unclosed tags by analyzing tag structure"""
    fixes_applied = []
    
    # Check for specific known issues
    # Fix paragraphs containing \end{nexercise} \end{exercisewrap} \footnotetext{...}
    # This is complex content that needs special handling
    pattern = r'</ul>\s*<p>\\end\{nexercise\}\s*\\end\{exercisewrap\}\s*\\footnotetext\{([^}]*)\}</p>'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'</ul>\n    <!-- Footnote: \1 -->', content)
        fixes_applied.append(f"Fixed {count} paragraphs with nexercise/footnotetext after ul")
    
    # Simpler version without ul
    pattern = r'<p>\\end\{nexercise\}\s*\\end\{exercisewrap\}\s*\\footnotetext\{([^}]*)\}</p>'
    count = len(re.findall(pattern, content))
    if count > 0:
        content = re.sub(pattern, r'<!-- Footnote: \1 -->', content)
        fixes_applied.append(f"Fixed {count} paragraphs with nexercise/footnotetext")
    
    # Fix orphaned <li> tags (li tags without ul wrapper)
    # Look for patterns like </example>\n\n  <li> or </assemblage>\n\n  <li>
    lines = content.split('\n')
    fixed_lines = []
    ul_stack = []
    ol_stack = []
    dl_stack = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Track ul/ol/dl open/close
        if '<ul>' in line or '<ul ' in line:
            ul_stack.append(i)
        if '<ol>' in line or '<ol ' in line:
            ol_stack.append(i)
        if '<dl>' in line or '<dl ' in line:
            dl_stack.append(i)
        
        # Check for closing tags - if no matching open, skip the line
        skip_line = False
        if '</ul>' in line:
            if ul_stack:
                ul_stack.pop()
            else:
                # Orphaned closing tag - skip it
                fixes_applied.append(f"Removed orphaned </ul> at line {i+1}")
                skip_line = True
        
        if '</ol>' in line:
            if ol_stack:
                ol_stack.pop()
            else:
                # Orphaned closing tag - skip it
                fixes_applied.append(f"Removed orphaned </ol> at line {i+1}")
                skip_line = True
        
        if '</dl>' in line:
            if dl_stack:
                dl_stack.pop()
            else:
                # Orphaned closing tag - skip it
                fixes_applied.append(f"Removed orphaned </dl> at line {i+1}")
                skip_line = True
        
        if skip_line:
            i += 1
            continue
        
        # Check for orphaned <li> (li without open ul/ol/dl)
        if '<li>' in line or '<li ' in line:
            if not ul_stack and not ol_stack and not dl_stack:
                # Insert <ul> before this line
                indent = len(line) - len(line.lstrip())
                fixed_lines.append(' ' * indent + '<ul>')
                ul_stack.append(i)
                fixes_applied.append(f"Added missing <ul> before <li> at line {i+1}")
        
        # Check for subsection/section close with open ul/ol
        if ('</subsection>' in line or '</section>' in line) and (ul_stack or ol_stack):
            # Insert closing tags before this line
            while ul_stack:
                fixed_lines.append('    </ul>')
                ul_stack.pop()
                fixes_applied.append(f"Added missing </ul> before line {i+1}")
            while ol_stack:
                fixed_lines.append('    </ol>')
                ol_stack.pop()
                fixes_applied.append(f"Added missing </ol> before line {i+1}")
        
        fixed_lines.append(line)
        i += 1
    
    content = '\n'.join(fixed_lines)
    
    return content, fixes_applied

def clean_whitespace(content):
    """Clean up excessive whitespace while preserving structure"""
    # Remove multiple consecutive blank lines (keep max 2)
    content = re.sub(r'\n\n\n+', '\n\n', content)
    
    # Remove trailing whitespace from lines
    lines = content.split('\n')
    lines = [line.rstrip() for line in lines]
    content = '\n'.join(lines)
    
    return content

def validate_xml(content):
    """Validate XML and return any errors"""
    try:
        ET.fromstring(content)
        return True, "XML is well-formed"
    except ET.ParseError as e:
        return False, str(e)

def main():
    """Main entry point"""
    input_file = 'source/ch08.ptx'
    output_file = 'source/ch08.ptx'
    
    print("=" * 70)
    print("Fixing XML issues in ch08.ptx")
    print("=" * 70)
    
    # Read input file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: {input_file} not found")
        return 1
    
    print(f"\nOriginal file size: {len(content):,} characters")
    print(f"Original line count: {content.count(chr(10)) + 1:,} lines")
    
    # Check initial tag balance
    print("\nInitial tag balance check:")
    initial_mismatches = track_tag_balance(content)
    if initial_mismatches:
        print("  Tag mismatches found:")
        for tag, info in sorted(initial_mismatches.items()):
            print(f"    <{tag}>: {info['open']} open, {info['close']} close (diff: {info['diff']:+d})")
    else:
        print("  All tags balanced")
    
    # Apply fixes
    all_fixes = []
    
    print("\nApplying fixes...")
    
    # 1. Fix LaTeX commands
    print("  1. Removing LaTeX commands...")
    content, fixes = fix_latex_commands(content)
    all_fixes.extend(fixes)
    
    # 2. Fix broken captions
    print("  2. Fixing broken captions...")
    content, fixes = fix_broken_captions(content)
    all_fixes.extend(fixes)
    
    # 3. Fix broken examples
    print("  3. Fixing broken examples...")
    content, fixes = fix_broken_examples(content)
    all_fixes.extend(fixes)
    
    # 4. Fix structural issues
    print("  4. Fixing structural issues...")
    content, fixes = fix_structure_issues(content)
    all_fixes.extend(fixes)
    
    # 5. Fix unclosed tags
    print("  5. Fixing unclosed tags...")
    content, fixes = fix_unclosed_tags(content)
    all_fixes.extend(fixes)
    
    # 6. Remove empty paragraphs
    print("  6. Removing empty paragraphs...")
    content, fixes = fix_empty_paragraphs(content)
    all_fixes.extend(fixes)
    
    # 7. Clean whitespace
    print("  7. Cleaning whitespace...")
    content = clean_whitespace(content)
    
    print(f"\nFixed file size: {len(content):,} characters")
    print(f"Fixed line count: {content.count(chr(10)) + 1:,} lines")
    
    # Check final tag balance
    print("\nFinal tag balance check:")
    final_mismatches = track_tag_balance(content)
    if final_mismatches:
        print("  WARNING: Tag mismatches still present:")
        for tag, info in sorted(final_mismatches.items()):
            print(f"    <{tag}>: {info['open']} open, {info['close']} close (diff: {info['diff']:+d})")
    else:
        print("  ✓ All tags balanced")
    
    # Validate XML
    print("\nValidating XML...")
    is_valid, message = validate_xml(content)
    if is_valid:
        print(f"  ✓ {message}")
    else:
        print(f"  ✗ Validation error: {message}")
        print("\n  Attempting to write file anyway...")
    
    # Write output
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n✓ Fixed content written to: {output_file}")
    except Exception as e:
        print(f"\n✗ Error writing file: {e}")
        return 1
    
    # Print summary
    print("\n" + "=" * 70)
    print("SUMMARY OF FIXES APPLIED")
    print("=" * 70)
    if all_fixes:
        for i, fix in enumerate(all_fixes, 1):
            print(f"  {i}. {fix}")
    else:
        print("  No fixes were needed")
    
    print("\n" + "=" * 70)
    if is_valid:
        print("✓ SUCCESS: File is now well-formed XML")
    else:
        print("⚠ WARNING: File may still have XML issues")
        print(f"  Error: {message}")
    print("=" * 70)
    
    return 0 if is_valid else 1

if __name__ == '__main__':
    exit(main())
