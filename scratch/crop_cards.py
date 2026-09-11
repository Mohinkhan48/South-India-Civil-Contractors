from PIL import Image

img = Image.open('C:/Users/User/.gemini/antigravity-ide/brain/411a6004-86e1-4709-9099-10d4e7e869d9/.user_uploaded/media_1789145694622.png')
w, h = img.size

# Let's crop 4 card image sections precisely:
# In the 1024x341 image:
# Total width = 1024. 4 cards with gaps.
# Card 1: x from ~9 to ~251, y from ~15 to ~172
# Card 2: x from ~262 to ~505, y from ~15 to ~172
# Card 3: x from ~516 to ~759, y from ~15 to ~172
# Card 4: x from ~770 to ~1013, y from ~15 to ~172

# Let's fine tune boundaries by scanning non-white/non-background pixels or fixed ratios:
card_w = w / 4.0

# Let's save 4 cropped images
crops = [
    ("Quality Assurance.png", (10, 16, 252, 172)),
    ("Structural Standards.png", (262, 16, 504, 172)),
    ("Material Quality.png", (515, 16, 757, 172)),
    ("Safety Standards.png", (769, 16, 1011, 172))
]

for name, box in crops:
    cropped = img.crop(box)
    cropped.save(f"public/images/{name}")
    print(f"Saved public/images/{name} with size {cropped.size}")
