import os

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

for f in sorted(os.listdir(videos_dir)):
    if "WA003" in f:
        filepath = os.path.join(videos_dir, f)
        size = os.path.getsize(filepath)
        with open(filepath, 'rb') as fp:
            data = fp.read()
            stsd_pos = data.find(b'stsd')
            if stsd_pos != -1:
                sub = data[stsd_pos:stsd_pos+60]
                print(f"{f:30s} | stsd snippet: {sub}")
            else:
                print(f"{f:30s} | NO STSD ATOM!")
