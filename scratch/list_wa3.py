import os

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

files = sorted(os.listdir(videos_dir))
wa3_files = [f for f in files if "WA003" in f or "WA003" in f]

print(f"Total WA003 files in public/videos: {len(wa3_files)}")
for f in wa3_files:
    size = os.path.getsize(os.path.join(videos_dir, f))
    print(f"  - {f} ({size / 1024 / 1024:.2f} MB)")
