import smtplib
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


def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('kjain0727@gmail.com', 'qjffgazmowzjxbbk')
    server.sendmail('kjain07272@gmail.com', to, content)
    server.close()


def email():
    try:

        talk("whom should i sent")
        to = input()
        talk("what should i say?")
        content = take_command().lower()
        sendEmail(to, content)
        talk("email has been sent")
    except Exception as e:
        print(e)
        talk("unable to sent email")