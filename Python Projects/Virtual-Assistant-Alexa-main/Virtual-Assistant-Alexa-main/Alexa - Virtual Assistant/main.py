import datetime
import random
import webbrowser
import pyautogui
import pyttsx3
import pywhatkit
import speech_recognition as sr
import wikipedia
from translate import Translator
from gtts import gTTS
from ecapture import ecapture as ec
from calculate import calculate
from chatbot import ChatterBot
from day import tellDay
from emailing import email
from game import game
from jokes import joke
from location import location
from notepad import note
from whatwho import whatwho

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
            voice = listener.listen(source, 0, 8)
            command = listener.recognize_google(voice)
            command = command.lower()
            return command
    except:
        talk('I am not sure I hear you')
        return ""


def wishme():
    hour = int(datetime.datetime.now().hour)
    if 0 <= hour < 12:
        talk("good morning!")
    elif 12 <= hour < 16:
        talk("good afternoon")
    else:
        talk("good evening")

    talk("hi i am alexa")


WAKE = "alexa"


def run_alexa():
    while True:
        greet = ('how can i help you', 'what would you like me to do', 'is there anything i can help you with')
        talk(random.choice(greet))
        commands = take_command()
        print(commands)
        if 'play' in commands:
            song = commands.replace('play', '')
            talk('playing' + song)
            pywhatkit.playonyt(song)
        elif 'game' in commands:
            game()
        elif 'time' in commands:
            time = datetime.datetime.now().strftime('%I:%M:%p')  # ('%I:%M %p')for a.m p.m
            print(time)
            talk('current time is' + time)
        elif "what day is it" in commands:
            tellDay()
        elif "you need a break" in commands:
            talk("ok you can call me anytime")
            talk("just say alexa")
        elif 'search' in commands:
            query = commands.replace('search', '')
            talk('searching...')
            result = wikipedia.summary(query, 1)
            print(result)
            talk(result)
            talk('for more information surfing google')
            engine.runAndWait()
            pywhatkit.search(result)
        elif 'joke' in commands:
            joke()
        elif 'open google' in commands:
            webbrowser.open("google.com")
        elif "where is" in commands:
            location(commands)
        elif "calculate" in commands:
            calculate(commands)
        elif "camera" in commands or "take a photo" in commands:
            ec.capture(0, "Alexa Camera ", "img.jpg")
        elif "who are you" in commands:
            talk("I am your virtual assistant created by Khushi")
        elif 'exit' in commands:
            talk("Thanks for giving me your time")
            exit()
        elif 'screenshot' in commands:
            image = pyautogui.screenshot()
            image.save('screenshot.png')
            talk("screenshot taken ")
        elif 'message' in commands:
            pywhatkit.sendwhatmsg("+917903530298", "hey", 23, 18)
            talk("message sent")
        elif 'send email' in commands:
            email()
        elif 'make a note' in commands or 'write down' in commands:
            talk("what would you like me to write down?")
            note_text = take_command()
            note(note_text)
            talk("I've made a note of that.")
        elif "what is" in commands or "who is" in commands:
            whatwho(commands)
        else:
            reply = ChatterBot(commands)
            talk(reply)


def start():
    translator = Translator(to_lang="hi")
    translation = translator.translate("Good Morning!")
    print(translation)
    talk(translation)
    speak = gTTS(text=translation, lang="hi", slow=False)
    talk(speak)
    wishme()
    #while True:
    talk('call my name')
    command = take_command()
    if command.count(WAKE) > 0:
        talk("I am ready")
        run_alexa()
    else:
        pass


if __name__ == "__main__":
    start()
