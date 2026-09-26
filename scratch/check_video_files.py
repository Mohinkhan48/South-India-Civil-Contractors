import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
file_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\data\projectVideos.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

matches = re.findall(r'["\'](/videos/[^"\']+)["\']', content)

print(f"Total video URLs in projectVideos.ts: {len(matches)}")

missing = []
for m in matches:
    clean_p = m.split('#')[0].split('?')[0]
    full_p = os.path.join(public_dir, clean_p.lstrip("/")).replace("/", "\\")
    if not os.path.isfile(full_p):
        missing.append((m, clean_p))

print(f"Missing video files: {len(missing)}")
for raw, clean in missing:
    print(f"  - Missing: {raw}")
