import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
file_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\data\projectVideos.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Match entries with id and videoUrl
entries = re.findall(r'\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",[^}]*"videoUrl":\s*"([^"]+)"', content)

print(f"Total entries parsed: {len(entries)}")

issues = []

for vid_id, title, url in entries:
    clean_url = url.split('#')[0].split('?')[0]
    disk_path = os.path.join(public_dir, clean_url.lstrip("/")).replace("/", "\\")
    if not os.path.isfile(disk_path):
        issues.append((vid_id, title, url, "FILE_NOT_FOUND"))
    else:
        # Check codec
        with open(disk_path, 'rb') as fp:
            data = fp.read()
            if b'hvc1' in data or b'hev1' in data:
                issues.append((vid_id, title, url, "UNSUPPORTED_H265_CODEC"))
            elif b'avc1' not in data and b'mp42' not in data:
                issues.append((vid_id, title, url, "UNKNOWN_CODEC"))

print(f"\nTotal video issues found in projectVideos.ts: {len(issues)}")
for vid_id, title, url, reason in issues:
    print(f"ID: {vid_id:10s} | Reason: {reason:25s} | URL: {url}")
