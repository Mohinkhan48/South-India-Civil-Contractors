import os
import struct

videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"

def get_atoms(filepath):
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
                # 64-bit size
                ext_header = f.read(8)
                size = struct.unpack('>Q', ext_header)[0]
            elif size == 0:
                # extends to EOF
                size = file_size - offset
            atoms.append((name, offset, size))
            offset += size
    return atoms

for f in sorted(os.listdir(videos_dir)):
    if "WA003" in f:
        filepath = os.path.join(videos_dir, f)
        atoms = get_atoms(filepath)
        atom_names = [a[0] for a in atoms]
        moov_pos = next((i for i, a in enumerate(atoms) if a[0] == 'moov'), None)
        mdat_pos = next((i for i, a in enumerate(atoms) if a[0] == 'mdat'), None)
        faststart = moov_pos is not None and mdat_pos is not None and moov_pos < mdat_pos
        print(f"{f:30s} | atoms: {atom_names} | moov_before_mdat (faststart): {faststart}")
