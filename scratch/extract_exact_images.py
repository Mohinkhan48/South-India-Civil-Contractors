import os
from PIL import Image

src_1 = r"C:\Users\User\.gemini\antigravity-ide\brain\aea3b04e-7d4c-4538-980d-a58a52be9b37\.user_uploaded\media_1789907529623.png"
src_2 = r"C:\Users\User\.gemini\antigravity-ide\brain\aea3b04e-7d4c-4538-980d-a58a52be9b37\.user_uploaded\media_1789907545649.png"
src_3 = r"C:\Users\User\.gemini\antigravity-ide\brain\aea3b04e-7d4c-4538-980d-a58a52be9b37\.user_uploaded\media_1789907553657.png"

im1 = Image.open(src_1)
im2 = Image.open(src_2)
im3 = Image.open(src_3)

# Exact box of the left image card:
# Left = 183, Top = 157, Right = 496, Bottom = 420
box = (183, 157, 496, 420)
print(f"Crop box: {box}, dimensions: {box[2]-box[0]}x{box[3]-box[1]}")

c1 = im1.crop(box)
c2 = im2.crop(box)
c3 = im3.crop(box)

out_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\images"
c1.save(os.path.join(out_dir, "about_slide_1.png"))
c2.save(os.path.join(out_dir, "about_slide_2.png"))
c3.save(os.path.join(out_dir, "about_slide_3.png"))
print("Done saving clean crops!")
