import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
src_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src"

missing_videos = []
valid_videos = []

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json')):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file_obj:
                content = file_obj.read()
                matches = re.findall(r'["\'](/videos/[^"\']+\.mp4(?:\?[^"\']*)?)["\']', content, re.IGNORECASE)
                for m in matches:
                    clean_path = m.split('#')[0].split('?')[0]
                    full_check_path = os.path.join(public_dir, clean_path.lstrip('/')).replace('/', '\\')
                    rel_src = os.path.relpath(filepath, src_dir)
                    if not os.path.isfile(full_check_path):
                        missing_videos.append((rel_src, m, clean_path))
                    else:
                        valid_videos.append((rel_src, m))

print(f"Total valid video references: {len(valid_videos)}")
print(f"Total missing video references: {len(missing_videos)}")

for src_f, raw_ref, clean_p in missing_videos:
    print(f"File: {src_f} -> Missing Video Reference: {raw_ref}")
