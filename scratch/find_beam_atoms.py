import os
import struct

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

def get_top_atoms(filepath):
    atoms = []
    with open(filepath, 'rb') as f:
        file_size = os.path.getsize(filepath)
        offset = 0
        while offset < file_size:
            f.seek(offset)
            header = f.read(8)
            if len(header) < 8:
                break
            size, name = struct.unpack('>I4s', header)
            name = name.decode('latin1', errors='ignore')
            if size == 1:
                ext_header = f.read(8)
                size = struct.unpack('>Q', ext_header)[0]
            elif size == 0:
                size = file_size - offset
            atoms.append((name, size))
            if size <= 0:
                break
            offset += size
    return atoms

has_beam = []
for f in sorted(os.listdir(videos_dir)):
    if f.endswith('.mp4'):
        filepath = os.path.join(videos_dir, f)
        try:
            atoms = [a[0] for a in get_top_atoms(filepath)]
            if 'beam' in atoms:
                has_beam.append((f, atoms))
        except Exception as e:
            print(f"Error reading {f}: {e}")

print(f"Total videos with 'beam' atom: {len(has_beam)}")
for f, atoms in has_beam[:15]:
    print(f"{f}: {atoms}")
