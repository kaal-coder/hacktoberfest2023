import pyttsx3
import speech_recognition as sr
import wolframalpha

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


def whatwho(command):
    # Use the same API key
    # that we have generated earlier
    client = wolframalpha.Client('K5VX82-XK47AQX6Q2')
    res = client.query(command)

    try:
        print(next(res.results).text)
        talk(next(res.results).text)
    except StopIteration:
        print("No results")
