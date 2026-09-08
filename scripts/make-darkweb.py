from PIL import Image, ImageDraw, ImageFont
import os

img = Image.new('RGB', (800, 450), color=(20, 30, 60))
d = ImageDraw.Draw(img)

try:
    font_big = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
except:
    font_big = ImageFont.load_default()
    font_small = ImageFont.load_default()

d.text((60, 60), "Dark Web", fill=(100, 180, 255), font=font_big)
d...[truncated]