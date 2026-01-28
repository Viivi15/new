
import re
from collections import Counter

file_path = r'd:\recents\new\new.js'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
except UnicodeDecodeError:
    with open(file_path, 'r', encoding='latin-1') as f:
        content = f.read()

# Pattern for function definitions: function name(...)
function_pattern = re.compile(r'function\s+([a-zA-Z0-9_$]+)\s*\(')

matches = function_pattern.findall(content)
counts = Counter(matches)

duplicates = {name: count for name, count in counts.items() if count > 1}

print("Duplicate Functions found:")
for name, count in duplicates.items():
    print(f"{name}: {count}")

if not duplicates:
    print("No duplicate function names found.")
