import re

file_path = "404.html"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

footer_pattern = re.compile(r'<!-- Footer -->\s*<footer class="bg-accent-red text-white py-8 px-6">.*?</footer>', re.DOTALL)
replacement = '<div id="footer-placeholder"></div>\n\n    <!-- FOOTER JS -->\n    <script src="footer.js" defer></script>'

new_content = footer_pattern.sub(replacement, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
    print(f"Updated {file_path}")
