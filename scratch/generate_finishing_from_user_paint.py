import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

paint_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india building contractors\public\assets\process\05-painting.jpg"
out_path = r"c:\Users\User\OneDrive\Documents\Desktop\south india building contractors\public\assets\process\06-finishing.jpg"

print(f"Loading user painting image: {paint_path}")
img = Image.open(paint_path).convert("RGBA")
w, h = img.size
print(f"Image dimensions: {w}x{h}")

# Step 1: Clean up remaining unpainted patches on the building (e.g., upper balcony wall)
draw = ImageDraw.Draw(img)

# Cover any unpainted patch on upper balcony with the same warm ivory paint
draw.polygon([
    (int(w * 0.40), int(h * 0.25)),
    (int(w * 0.45), int(h * 0.25)),
    (int(w * 0.45), int(h * 0.42)),
    (int(w * 0.40), int(h * 0.42)),
], fill=(240, 230, 215, 255))

# Retouch the right upper wall where painter is standing
draw.polygon([
    (int(w * 0.74), int(h * 0.28)),
    (int(w * 0.82), int(h * 0.28)),
    (int(w * 0.82), int(h * 0.48)),
    (int(w * 0.74), int(h * 0.48)),
], fill=(70, 78, 85, 255)) # matching the dark charcoal accent wall

# Clean the right-side scaffolding area with clean architecture
draw.polygon([
    (int(w * 0.78), int(h * 0.42)),
    (int(w * 0.94), int(h * 0.42)),
    (int(w * 0.94), int(h * 0.85)),
    (int(w * 0.86), int(h * 0.85)),
    (int(w * 0.86), int(h * 0.60)),
    (int(w * 0.78), int(h * 0.60)),
], fill=(246, 242, 235, 255)) # clean white/cream finished pillar & wall

# Step 2: Solid Teak Entrance Door
dx1, dy1, dx2, dy2 = int(w * 0.48), int(h * 0.58), int(w * 0.57), int(h * 0.80)
draw.rectangle([dx1, dy1, dx2, dy2], fill=(85, 40, 15), outline=(40, 18, 5), width=3)
for gy in range(dy1 + 10, dy2, 14):
    draw.line([(dx1 + 4, gy), (dx2 - 4, gy)], fill=(55, 22, 8), width=2)
draw.rectangle([dx2 - 10, dy1 + int((dy2 - dy1) * 0.35), dx2 - 7, dy1 + int((dy2 - dy1) * 0.70)], fill=(240, 245, 250), outline=(100, 110, 120))

# Step 3: Paved Driveway & Lush Tropical Landscaping replacing raw construction site ground
land_y = int(h * 0.82)
# Clean interlocking grey driveway stones
draw.rectangle([0, land_y, w, h], fill=(150, 155, 160))
for px in range(0, w, 24):
    draw.line([(px, land_y), (px + int((h - land_y) * 0.45), h)], fill=(125, 130, 135), width=2)
for py in range(land_y, h, 18):
    draw.line([(0, py), (w, py)], fill=(130, 135, 140), width=2)

# Lush Green Hedge Garden and Ornamental Shrubs
for hx in range(0, w, 30):
    draw.ellipse([hx - 10, land_y - 28, hx + 55, land_y + 16], fill=(30, 130, 30))
    draw.ellipse([hx, land_y - 36, hx + 45, land_y + 6], fill=(42, 155, 42))
    draw.ellipse([hx + 10, land_y - 20, hx + 50, land_y + 12], fill=(22, 105, 22))

# Step 4: Warm Architectural LED Downlights Under Eaves & Balcony
for lx, ly in [
    (int(w * 0.28), int(h * 0.12)),
    (int(w * 0.60), int(h * 0.16)),
    (int(w * 0.72), int(h * 0.26)),
    (int(w * 0.55), int(h * 0.56)),
    (int(w * 0.66), int(h * 0.58))
]:
    draw.ellipse([lx - 4, ly - 4, lx + 4, ly + 4], fill=(255, 255, 210))
    draw.polygon([
        (lx - 2, ly),
        (lx + 2, ly),
        (lx + 32, ly + 75),
        (lx - 32, ly + 75)
    ], fill=(255, 245, 160, 45))

img.convert("RGB").save(out_path, "JPEG", quality=95)
print(f"Saved completed Stage 6 image to: {out_path}")
