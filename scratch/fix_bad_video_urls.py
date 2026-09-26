import os

file_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\data\projectVideos.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('"/videos/hero_construction_building.mp4"', '"/videos/VID-20260925-WA0018.mp4"')
content = content.replace('"/videos/home video.mp4"', '"/videos/VID-20260925-WA0019.mp4"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated projectVideos.ts successfully.")

hero_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\src\components\Hero.tsx"
with open(hero_path, "r", encoding="utf-8") as f:
    hero_content = f.read()

hero_content = hero_content.replace('src="/videos/home video.mp4"', 'src="/videos/VID-20260925-WA0018.mp4"')

with open(hero_path, "w", encoding="utf-8") as f:
    f.write(hero_content)

print("Updated Hero.tsx successfully.")
