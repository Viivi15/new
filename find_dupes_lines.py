
import re

file_path = r'd:\recents\new\new.js'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
except UnicodeDecodeError:
    with open(file_path, 'r', encoding='latin-1') as f:
        lines = f.readlines()

pattern = re.compile(r'function\s+([a-zA-Z0-9_$]+)\s*\(')

func_locations = {}

for i, line in enumerate(lines):
    match = pattern.search(line)
    if match:
        func_name = match.group(1)
        if func_name not in func_locations:
            func_locations[func_name] = []
        func_locations[func_name].append(i + 1)

print("Duplicate Functions and Line Numbers:")
for name, locs in func_locations.items():
    if len(locs) > 1:
        print(f"{name}: {locs}")
