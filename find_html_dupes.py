
import re
from collections import Counter

file_path = r'd:\recents\new\new.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

id_pattern = re.compile(r'id=["\']([^"\']+)["\']')
ids = id_pattern.findall(content)
counts = Counter(ids)

duplicates = {name: count for name, count in counts.items() if count > 1}

print("Duplicate IDs found:")
for name, count in duplicates.items():
    print(f"{name}: {count}")
if not duplicates:
    print("No duplicate IDs found.")
