import tkinter as tk
from tkinter import Entry, Button, Label

class CountdownTimerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Countdown Timer")
        self.root.geometry("300x200")
        
        self.time_entry = Entry(root, font=("Arial", 20))
        self.time_entry.pack(pady=20)
        
        self.start_button = Button(root, text="Start Countdown", command=self.start_countdown)
        self.start_button.pack()
        
        self.time_left_label = Label(root, text="", font=("Arial", 20))
        self.time_left_label.pack(pady=20)

        self.countdown_interval = 1000  # Timer update interval in milliseconds

    def start_countdown(self):
        try:
            countdown_seconds = int(self.time_entry.get())
            self.update_countdown(countdown_seconds)
        except ValueError:
            self.time_left_label.config(text="Invalid input. Enter a valid number of seconds.")

    def update_countdown(self, seconds):
        if seconds > 0:
            mins, secs = divmod(seconds, 60)
            timeformat = '{:02d}:{:02d}'.format(mins, secs)
            self.time_left_label.config(text="Time Remaining: " + timeformat)
            self.root.after(self.countdown_interval, self.update_countdown, seconds - 1)
        else:
            self.time_left_label.config(text="Time's up!")

if __name__ == "__main__":
    root = tk.Tk()
    app = CountdownTimerApp(root)
    root.mainloop()
