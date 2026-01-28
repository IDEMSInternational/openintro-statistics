#!/usr/bin/env python3
"""
Final content cleanup for Chapter 9
Fixes remaining LaTeX notation and content issues
"""

import re

def clean_content(content):
    """Clean up remaining content issues"""
    
    # Fix rate} → \widehat{rate}
    content = re.sub(r'<me>rate\}', r'<me>\\widehat{rate}', content)
    content = re.sub(r'<mrow>rate\}', r'<mrow>\\widehat{rate}', content)
    content = content.replace('rate}', 'rate')
    
    # Fix p{1 - p → \hat{p}/(1 - \hat{p})
    content = content.replace('p{1 - p', r'\hat{p}/(1 - \hat{p}')
    
    # Remove extra closing braces
    content = re.sub(r'\}\s*=', r' =', content)
    
    # Fix I( notation to be more readable
    content = re.sub(r'I\(([^=]+)=([^)]+)\)', r'\\mathbb{1}(\1 = \2)', content)
    
    # Clean up whitespace around equals
    content = re.sub(r'\s*=\s*', r' = ', content)
    
    return content

def main():
    input_file = 'source/ch09.ptx'
    
    print("Final Content Cleanup - Chapter 9")
    print("=" * 50)
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    
    # Apply cleanup
    content = clean_content(content)
    
    # Write output
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    final_len = len(content)
    
    print(f"Original size: {original_len} bytes")
    print(f"Final size: {final_len} bytes")
    print(f"Output: {input_file}")
    
    # Validate XML still parses
    import xml.etree.ElementTree as ET
    try:
        tree = ET.parse(input_file)
        print("\n✓ XML still valid after cleanup")
        root = tree.getroot()
        print(f"✓ {len(root.findall('.//{*}section'))} sections")
        print(f"✓ {len(root.findall('.//{*}subsection'))} subsections")
        print(f"✓ {len(root.findall('.//{*}example'))} examples")
        print(f"✓ {len(root.findall('.//{*}exercise'))} exercises")
    except ET.ParseError as e:
        print(f"\n✗ XML Error: {e}")
    
    print("=" * 50)
    print("✅ Cleanup complete!")

if __name__ == '__main__':
    main()
