import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
src_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src"

missing = []
valid = []

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json')):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file_obj:
                content = file_obj.read()
                matches = re.findall(r'["\'](/images/[^"\']+\.(?:png|jpg|jpeg|svg|webp|ico|gif))["\']', content, re.IGNORECASE)
                for m in matches:
                    clean_path = m.split('#')[0].split('?')[0]
                    full_check_path = os.path.join(public_dir, clean_path.lstrip('/')).replace('/', '\\')
                    if not os.path.isfile(full_check_path):
                        missing.append((os.path.relpath(filepath, src_dir), m, clean_path))
                    else:
                        valid.append((os.path.relpath(filepath, src_dir), m))

print(f"Total valid image references: {len(valid)}")
print(f"Total missing image references: {len(missing)}")

# Group missing by source file
from collections import defaultdict
grouped = defaultdict(list)
for src_f, raw, clean in missing:
    grouped[src_f].append(raw)

for src_f, refs in grouped.items():
    print(f"\nSource file: {src_f} (Count missing: {len(refs)})")
    for r in refs[:5]:
        print(f"  - {r}")
    if len(refs) > 5:
        print(f"  ... and {len(refs) - 5} more")
