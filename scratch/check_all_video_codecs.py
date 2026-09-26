import os

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

results = []

for f in sorted(os.listdir(videos_dir)):
    if f.endswith('.mp4'):
        filepath = os.path.join(videos_dir, f)
        size = os.path.getsize(filepath)
        with open(filepath, 'rb') as fp:
            full_data = fp.read()
            codecs_found = []
            for codec_atom in [b'avc1', b'avc3', b'hvc1', b'hev1', b'mp4v', b'vp09', b'vp08', b'av01']:
                if codec_atom in full_data:
                    codecs_found.append(codec_atom.decode('latin1'))
            results.append((f, size, codecs_found))

print(f"{'Filename':35s} | {'Size (MB)':10s} | {'Codecs Found'}")
print("-" * 65)
for f, size, codecs in results:
    if codecs != ['avc1']:
        print(f"{f:35s} | {size/1024/1024:10.2f} | {codecs}")
