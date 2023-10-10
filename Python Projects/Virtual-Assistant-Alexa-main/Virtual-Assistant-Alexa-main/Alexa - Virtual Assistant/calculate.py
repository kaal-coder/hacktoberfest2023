import wolframalpha
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


def calculate(command):
    app_id = "K5VX82-XK47AQX6Q2"
    client = wolframalpha.Client(app_id)
    indx = command.lower().split().index('calculate')
    command = command.split()[indx + 1:]
    res = client.query(' '.join(command))
    answer = next(res.results).text
    print("The answer is " + answer)
    talk("The answer is " + answer)

