import os
import subprocess

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

for f in sorted(os.listdir(videos_dir)):
    if "WA003" in f or "WA0030" in f or "WA003" in f:
        filepath = os.path.join(videos_dir, f)
        size = os.path.getsize(filepath)
        print(f"File: {f} | Size: {size} bytes ({size / 1024 / 1024:.2f} MB)")

print("\n--- Checking all WA003* files with ffprobe if available ---")
for f in sorted(os.listdir(videos_dir)):
    if "WA003" in f:
        filepath = os.path.join(videos_dir, f)
        try:
            res = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=codec_name,width,height', '-of', 'default=noprint_wrappers=1', filepath], capture_output=True, text=True)
            print(f"{f}: {res.stdout.strip()} | err: {res.stderr.strip()}")
        except Exception as e:
            print(f"Could not run ffprobe: {e}")
            break
