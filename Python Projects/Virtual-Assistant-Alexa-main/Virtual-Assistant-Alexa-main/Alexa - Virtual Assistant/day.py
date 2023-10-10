from calendar import calendar
from datetime import datetime
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


def tellDay():
    day = datetime.today()
    talk(calendar.day_name[day.weekday()])
    '''Day_dict = {1: 'Monday', 2: 'Tuesday',
                3: 'Wednesday', 4: 'Thursday',
                5: 'Friday', 6: 'Saturday',
                7: 'Sunday'}
    if day in Day_dict.keys():
        day_of_the_week = Day_dict[day]
        print(day_of_the_week)
        speak("The day is " + day_of_the_week)'''
