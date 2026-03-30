import os
import glob
import re

html_files = glob.glob("*.html")

footer_pattern = re.compile(r'<!-- UNIFIED FOOTER -->\s*<footer class="bg-\[#FF3B3F\] text-white px-6 py-16".*?</footer>', re.DOTALL)
footer_pattern_no_comment = re.compile(r'<footer class="bg-\[#FF3B3F\] text-white px-6 py-16".*?</footer>', re.DOTALL)
script_pattern = re.compile(r'<script>\s*document\.getElementById\(\'copyright-year\'\)\.textContent = new Date\(\)\.getFullYear\(\);\s*</script>', re.DOTALL)

replacement = '<div id="footer-placeholder"></div>\n\n    <!-- FOOTER JS -->\n    <script src="footer.js" defer></script>'

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace footer
    if '<!-- UNIFIED FOOTER -->' in content:
        new_content = footer_pattern.sub(replacement, content)
    else:
        new_content = footer_pattern_no_comment.sub(replacement, content)

    # Remove old script
    new_content = script_pattern.sub('', new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes needed for {file_path}")
