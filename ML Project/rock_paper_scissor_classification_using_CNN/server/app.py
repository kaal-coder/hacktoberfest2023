from flask import Flask, render_template, Response, request, redirect, url_for
import cv2
import os
import numpy as np
import pickle
from PIL import Image
import tensorflow

app = Flask(__name__)

# Initialize the camera
camera = cv2.VideoCapture( 0)

@app.route('/')
def index():
    return render_template('index.html')

def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

import random

def find_winner(computer , human):
    if computer == human:
        return f"Your Choice {human} , Computer's Choice {computer} \n It's a tie!"
    elif (computer == "stone" and human == "scissors") or \
         (computer == "paper" and human == "stone") or \
         (computer == "scissors" and human == "paper"):
        return f"Your Choice {human} , Computer's Choice {computer} \n Computer wins!" 
    else:
        return f"Your Choice {human} , Computer's Choice {computer} \n You won!"

def choose_randomly():
    # List of choices: stone, paper, scissors
    choices = ["stone", "paper", "scissors"]
    
    # Use random.choice to select a random choice
    computer_choice = random.choice(choices)
    
    return computer_choice
def load_model_and_predict():
    with open("D:/datasets/rps/model/model.pkl", "rb") as f:
        model = pickle.load(f)

    target_size = (100, 100)
    image_path = "pic//image.jpg"
    
    image = Image.open(image_path)
    image = image.resize(target_size)
    image = image.convert('L')
    image_pixel = np.array(image) / 255
    image_pixel = image_pixel.reshape(1,100,100,1)
    print("Image Size : " , image_pixel.shape)

    pred = model.predict(image_pixel)
    pred = np.argmax(pred , axis = 1)
    human_choice=None


    if (pred == 0):
        human_choice='stone'
    
    elif (pred == 1):
        human_choice='paper'
    
    else:
        human_choice='scissors'
    

    
    

    print(model.summary())

    return find_winner(choose_randomly() , human_choice)



@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/capture', methods=['POST'])
def capture():
    _, frame = camera.read()
    if _:
        # Generate a unique filename for each captured image
        filename = f"pic//image.jpg"
        cv2.imwrite(filename, frame)
        return render_template('image.html' , size = load_model_and_predict())
    else:
        return "Failed to capture image."

if __name__ == "__main__":
    app.run(debug=True)

# Release the camera when the app is closed
camera.release()
cv2.destroyAllWindows()
