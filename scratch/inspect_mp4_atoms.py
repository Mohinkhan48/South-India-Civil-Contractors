import os

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

for f in sorted(os.listdir(videos_dir)):
    if f.endswith('.mp4'):
        filepath = os.path.join(videos_dir, f)
        with open(filepath, 'rb') as fp:
            data = fp.read(512)
            ftyp_idx = data.find(b'ftyp')
            if ftyp_idx != -1:
                major_brand = data[ftyp_idx+4:ftyp_idx+8].decode('latin1', errors='ignore')
                print(f"{f:35s} | brand: {major_brand}")
            else:
                print(f"{f:35s} | NO FTYP ATOM FOUND!")
