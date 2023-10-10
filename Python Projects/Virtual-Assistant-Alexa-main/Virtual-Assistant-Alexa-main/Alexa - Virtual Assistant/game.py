import random
import pyttsx3
import speech_recognition as sr
listener = sr.Recognizer()
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)


def talk(text):
    engine.say(text)
    engine.runAndWait()


def take_command():
    try:
        with sr.Microphone() as source:
            print('listening....')
            listener.adjust_for_ambient_noise(source, duration=1)  # for accurate audio
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
        return command
    except:
        talk("can't take the command")
        return "None"


def game():
    moves = ["rock", "paper", "scissor"]
    talk("choose among rock paper or scissor")
    pmove = take_command()
    talk("your choice is" + pmove)
    cmove = random.choice(moves)
    talk("I choose " + cmove)
    if pmove == cmove:
        talk("the match draw")
    elif pmove == "rock" and cmove == "paper":
        talk("you won")
    elif pmove == "rock" and cmove == "scissor":
        talk("you won")
    elif pmove == "paper" and cmove == "scissor":
        talk("i won")
    elif pmove == "paper" and cmove == "rock":
        talk("i won")
    elif pmove == "scissor" and cmove == "paper":
        talk("you won")
    elif pmove == "scissor" and cmove == "rock":
        talk("i  won")
