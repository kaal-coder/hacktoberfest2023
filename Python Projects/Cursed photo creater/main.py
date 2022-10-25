from PIL import Image, ImageEnhance, ImageOps
import os

path = r"C:\Users\kmdha\Documents\Coding\python\photoeditor\phototouse"
out = r"C:\Users\kmdha\Documents\Coding\python\photoeditor\photoout"

factor = 2
brightness = 1.5

def edit_photo(filepath):
    editedimg = Image.open(filepath)
    editedimg = editedimg.convert("L")
    editedimg = ImageEnhance.Contrast(editedimg).enhance(factor)
    editedimg = ImageEnhance.Brightness(editedimg).enhance(brightness)
    editedimg = ImageOps.expand(editedimg, border=20, fill=10)
    return editedimg

for filename in os.listdir(path):
    #!Get photo path
    filepath = (f"{path}\{filename}")
    print(filepath)
    
    #!edit the photo
    editPic = edit_photo(filepath)
    
    #!Save the photo
    editPic.save(f"{out}\{os.path.splitext(filename)[0]}_edited.jpg")

print("DONE ✅")
