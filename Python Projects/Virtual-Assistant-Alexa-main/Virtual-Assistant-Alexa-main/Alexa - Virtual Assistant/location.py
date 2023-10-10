import pyttsx3
import speech_recognition as sr
import webbrowser
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


def location(command):
    command = command.replace("where is", "")
    locations = command
    talk("User asked to Locate")
    talk(locations)
    webbrowser.open("http://www.google.com/maps/place/" + locations)