import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
file_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\data\projectVideos.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Match entries in projectVideos array
pattern = re.compile(r'  \{\s*"id":\s*"video-\d+",\s*"title":\s*"[^"]*",\s*"category":\s*"[^"]*",\s*"location":\s*"[^"]*",\s*"videoUrl":\s*"([^"]+)",\s*"description":\s*"[^"]*"\s*\}(?:,)?\n?')

deleted_urls = []

def filter_entry(match):
    full_block = match.group(0)
    video_url = match.group(1)
    clean_url = video_url.split('#')[0].split('?')[0]
    disk_path = os.path.join(public_dir, clean_url.lstrip("/")).replace("/", "\\")
    if not os.path.isfile(disk_path):
        deleted_urls.append(video_url)
        return "" # Remove block
    return full_block

new_content = pattern.sub(filter_entry, content)

# Clean up trailing comma if last element was removed
new_content = re.sub(r',\s*(\n\s*\];)', r'\1', new_content)

print(f"Removed deleted videos count: {len(deleted_urls)}")
for u in deleted_urls:
    print(f"  - Removed: {u}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated projectVideos.ts successfully.")
