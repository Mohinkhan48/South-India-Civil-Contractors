import os
import re

public_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public"
file_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\data\constructionImages.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract all array items
lines = content.splitlines()

valid_lines = []
removed_count = 0

for line in lines:
    match = re.search(r'["\'](/images/[^"\']+)["\']', line)
    if match:
        img_path = match.group(1)
        # Check if file exists in public directory
        disk_path = os.path.join(public_dir, img_path.lstrip("/")).replace("/", "\\")
        if os.path.isfile(disk_path):
            valid_lines.append(line)
        else:
            removed_count += 1
            print(f"Removing missing image: {img_path}")
    else:
        valid_lines.append(line)

print(f"\nTotal lines removed: {removed_count}")

new_content = "\n".join(valid_lines) + "\n"
with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated constructionImages.ts successfully.")
