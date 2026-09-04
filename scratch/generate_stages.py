import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

base_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india building contractors\public\assets\process\04-plaster.jpg"
out_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india building contractors\public\assets\process"

print(f"Loading base plaster image: {base_path}")
img = Image.open(base_path).convert("RGBA")
w, h = img.size
print(f"Image dimensions: {w}x{h}")

# Wall polygons for this exact building
poly_upper_left = [
    (int(w * 0.18), int(h * 0.30)),
    (int(w * 0.28), int(h * 0.08)),
    (int(w * 0.52), int(h * 0.16)),
    (int(w * 0.44), int(h * 0.55)),
    (int(w * 0.18), int(h * 0.55)),
]

poly_upper_right = [
    (int(w * 0.52), int(h * 0.16)),
    (int(w * 0.77), int(h * 0.28)),
    (int(w * 0.76), int(h * 0.58)),
    (int(w * 0.44), int(h * 0.55)),
]

poly_ground = [
    (int(w * 0.18), int(h * 0.55)),
    (int(w * 0.76), int(h * 0.58)),
    (int(w * 0.77), int(h * 0.82)),
    (int(w * 0.20), int(h * 0.81)),
]

# ==============================================================================
# 1. GENERATE STAGE 5: PAINTING (EXACT SAME BUILDING WITH PAINT APPLIED & PAINTERS)
# ==============================================================================
print("Generating Stage 5 (Painting)...")
img_painting = img.copy()

paint_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
draw = ImageDraw.Draw(paint_layer)

# Warm luxury exterior paint
draw.polygon(poly_upper_left, fill=(245, 238, 226, 210))
draw.polygon(poly_upper_right, fill=(240, 230, 215, 205))
draw.polygon(poly_ground, fill=(248, 242, 232, 215))

# Dark charcoal architectural roof eave trims
draw.polygon([
    (int(w * 0.16), int(h * 0.31)),
    (int(w * 0.28), int(h * 0.05)),
    (int(w * 0.54), int(h * 0.14)),
    (int(w * 0.52), int(h * 0.17)),
    (int(w * 0.28), int(h * 0.09)),
    (int(w * 0.18), int(h * 0.32)),
], fill=(42, 53, 62, 240))

# Cantilever beam trim
draw.rectangle([
    (int(w * 0.42), int(h * 0.53)),
    (int(w * 0.80), int(h * 0.57))
], fill=(45, 55, 65, 230))

paint_layer = paint_layer.filter(ImageFilter.GaussianBlur(radius=3))

np_base = np.array(img_painting).astype(float)
np_paint = np.array(paint_layer).astype(float)

alpha = np_paint[:, :, 3:4] / 255.0
paint_rgb = np_paint[:, :, :3]
base_rgb = np_base[:, :, :3]

tinted = base_rgb * (paint_rgb / 190.0)
blended = (1.0 - alpha) * base_rgb + alpha * (0.35 * tinted + 0.65 * (base_rgb * 0.35 + paint_rgb * 0.75))
np_base[:, :, :3] = np.clip(blended, 0, 255)
img_painting = Image.fromarray(np_base.astype(np.uint8), "RGBA")

draw_p = ImageDraw.Draw(img_painting)

# Paint bucket on ground
bucket_x, bucket_y = int(w * 0.28), int(h * 0.84)
draw_p.rectangle([bucket_x, bucket_y, bucket_x + 40, bucket_y + 50], fill=(255, 255, 255), outline=(180, 180, 180), width=2)
draw_p.rectangle([bucket_x + 2, bucket_y + 14, bucket_x + 38, bucket_y + 28], fill=(160, 108, 62))
draw_p.ellipse([bucket_x, bucket_y - 4, bucket_x + 40, bucket_y + 4], fill=(245, 240, 230), outline=(150, 150, 150))

# Upper floor paint roller with extension handle
rx, ry = int(w * 0.42), int(h * 0.30)
draw_p.line([(rx, ry), (rx - 45, ry + 120)], fill=(70, 70, 70), width=4)
draw_p.rectangle([rx - 10, ry - 20, rx + 20, ry - 4], fill=(250, 245, 235), outline=(180, 160, 130), width=2)

out_painting_path = os.path.join(out_dir, "05-painting.jpg")
img_painting.convert("RGB").save(out_painting_path, "JPEG", quality=95)
print(f"Saved Stage 5 to: {out_painting_path}")


# ==============================================================================
# 2. GENERATE STAGE 6: FINISHING (EXACT SAME BUILDING FULLY COMPLETED)
# ==============================================================================
print("Generating Stage 6 (Finishing)...")
img_finishing = img.copy()

np_fin = np.array(img_finishing).astype(float)
full_paint_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
draw_f = ImageDraw.Draw(full_paint_layer)

# Pristine luxury exterior painted walls
draw_f.polygon(poly_upper_left, fill=(248, 243, 235, 245))
draw_f.polygon(poly_upper_right, fill=(245, 239, 230, 240))
draw_f.polygon(poly_ground, fill=(250, 246, 238, 250))

# Dark charcoal architectural canopy & roof trims
draw_f.polygon([
    (int(w * 0.16), int(h * 0.31)),
    (int(w * 0.28), int(h * 0.05)),
    (int(w * 0.54), int(h * 0.14)),
    (int(w * 0.52), int(h * 0.18)),
    (int(w * 0.28), int(h * 0.09)),
    (int(w * 0.18), int(h * 0.32)),
], fill=(35, 45, 54, 255))

draw_f.rectangle([
    (int(w * 0.42), int(h * 0.52)),
    (int(w * 0.80), int(h * 0.58))
], fill=(35, 45, 54, 255))

full_paint_layer = full_paint_layer.filter(ImageFilter.GaussianBlur(radius=2))
np_fp = np.array(full_paint_layer).astype(float)
alpha_f = np_fp[:, :, 3:4] / 255.0
paint_f_rgb = np_fp[:, :, :3]
base_f_rgb = np_fin[:, :, :3]

tinted_f = base_f_rgb * (paint_f_rgb / 180.0)
blended_f = (1.0 - alpha_f) * base_f_rgb + alpha_f * (0.30 * tinted_f + 0.70 * (base_f_rgb * 0.3 + paint_f_rgb * 0.75))
np_fin[:, :, :3] = np.clip(blended_f, 0, 255)

img_finishing = Image.fromarray(np_fin.astype(np.uint8), "RGBA")
draw_fin = ImageDraw.Draw(img_finishing)

# Windows installation
def draw_glass_window(box, panes=(2, 1)):
    x1, y1, x2, y2 = box
    draw_fin.rectangle([x1, y1, x2, y2], fill=(15, 23, 42), outline=(30, 41, 59), width=3)
    gx1, gy1, gx2, gy2 = x1 + 4, y1 + 4, x2 - 4, y2 - 4
    draw_fin.rectangle([gx1, gy1, gx2, gy2], fill=(28, 55, 88))
    # Sky & Cloud Reflection diagonal band
    draw_fin.polygon([
        (gx1, gy2),
        (gx1 + (gx2 - gx1) * 0.4, gy2),
        (gx2, gy1 + (gy2 - gy1) * 0.3),
        (gx2, gy1),
        (gx1 + (gx2 - gx1) * 0.6, gy1)
    ], fill=(130, 185, 240))
    cols, rows = panes
    for c in range(1, cols):
        cx = int(gx1 + (gx2 - gx1) * (c / cols))
        draw_fin.line([(cx, gy1), (cx, gy2)], fill=(15, 23, 42), width=3)
    for r in range(1, rows):
        ry = int(gy1 + (gy2 - gy1) * (r / rows))
        draw_fin.line([(gx1, ry), (gx2, ry)], fill=(15, 23, 42), width=3)

# 1. Upper Floor Left Bedroom Window
draw_glass_window([int(w * 0.22), int(h * 0.34), int(w * 0.32), int(h * 0.50)], panes=(2, 2))

# 2. Lower Floor Left Window
draw_glass_window([int(w * 0.22), int(h * 0.60), int(w * 0.33), int(h * 0.78)], panes=(2, 2))

# 3. Upper Floor Right Balcony Glass Wall / Sliding Door
draw_glass_window([int(w * 0.56), int(h * 0.33), int(w * 0.72), int(h * 0.52)], panes=(3, 1))

# Balcony Frameless Glass Railing
bx1, by1, bx2, by2 = int(w * 0.44), int(h * 0.44), int(w * 0.77), int(h * 0.53)
draw_fin.rectangle([bx1, by1, bx2, by2], fill=(160, 205, 240), outline=(230, 240, 255), width=2)
draw_fin.rectangle([bx1 - 2, by1 - 4, bx2 + 2, by1 + 2], fill=(220, 225, 230), outline=(140, 150, 160), width=1)
for px in range(bx1, bx2, int((bx2 - bx1) / 5)):
    draw_fin.line([(px, by1), (px, by2)], fill=(200, 210, 220), width=3)

# Main Entrance Solid Teakwood Door
dx1, dy1, dx2, dy2 = int(w * 0.46), int(h * 0.58), int(w * 0.55), int(h * 0.79)
draw_fin.rectangle([dx1, dy1, dx2, dy2], fill=(95, 45, 15), outline=(50, 20, 5), width=4)
for gy in range(dy1 + 10, dy2, 14):
    draw_fin.line([(dx1 + 4, gy), (dx2 - 4, gy)], fill=(65, 25, 8), width=2)
draw_fin.rectangle([dx2 - 12, dy1 + int((dy2 - dy1) * 0.35), dx2 - 8, dy1 + int((dy2 - dy1) * 0.70)], fill=(240, 245, 250), outline=(120, 130, 140))

# Paved Driveway & Landscaping Base
land_y = int(h * 0.80)
draw_fin.rectangle([0, land_y, w, h], fill=(140, 145, 150))
for px in range(0, w, 24):
    draw_fin.line([(px, land_y), (px + int((h - land_y) * 0.4), h)], fill=(115, 120, 125), width=2)
for py in range(land_y, h, 18):
    draw_fin.line([(0, py), (w, py)], fill=(120, 125, 130), width=2)

for hx in range(int(w * 0.12), int(w * 0.85), 35):
    draw_fin.ellipse([hx, land_y - 25, hx + 55, land_y + 15], fill=(34, 139, 34))
    draw_fin.ellipse([hx + 10, land_y - 35, hx + 45, land_y + 5], fill=(46, 160, 46))
    draw_fin.ellipse([hx + 15, land_y - 20, hx + 50, land_y + 10], fill=(24, 115, 24))

# Warm Architectural LED Eave Downlights
for lx in [int(w * 0.28), int(w * 0.50), int(w * 0.68)]:
    ly = int(h * 0.12) if lx < int(w * 0.40) else int(h * 0.22)
    draw_fin.ellipse([lx - 4, ly - 4, lx + 4, ly + 4], fill=(255, 255, 200))

out_finishing_path = os.path.join(out_dir, "06-finishing.jpg")
img_finishing.convert("RGB").save(out_finishing_path, "JPEG", quality=95)
print(f"Saved Stage 6 to: {out_finishing_path}")

print("Stage 5 and Stage 6 generation complete!")
