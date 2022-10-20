from tkinter import *

import requests
from requests.auth import HTTPBasicAuth

# Creating GUI
root = Tk()

# Giving Title to the program
root.title("Github User Details")

# Icon
root.iconbitmap('icon.ico')

# Frame
frame1 = LabelFrame(root, width=50, height=150, bd=5, bg='grey')
frame1.grid(row=0, column=0, padx=5, pady=5)

# Header
head = Label(frame1, text="GITHUB USER DATA COLLECTOR", font=("Arial", 15), fg="black", bd=2, anchor=W)
head.grid(row=0, columnspan=2, padx=50, pady=30, sticky=W + E)

# Entry columns

leb1 = Label(frame1, text="Enter username - ")
leb1.grid(row=2, columnspan=2, padx=30, pady=5)

e1 = Entry(frame1, width=30, borderwidth=5)
e1.grid(row=3, columnspan=2, padx=30, pady=15)


# Function for the button - show details
def show_details():
    # creating  connection

    authentication = HTTPBasicAuth(e1.get(), "password")
    data = requests.get('https://api.github.com/users/' + e1.get(),
                        auth=authentication)
    # getting data
    user_data = data.json()

    # storing data in a string

    a = "\n\t\tINFO OF  {} ----".format(e1.get()) + "\n\n\n\tName - \t {}".format(
        user_data['name']) + "\n\n\tEmail - \t {}".format(
        user_data['email']) + "\n\n\tId - \t {}".format(
        user_data['id']) + "\n\n\tLocation - \t {}".format(
        user_data['location']) + "\n\n\tFollowers - \t {}".format(
        user_data['followers']) + "\n\n\tFollowing - \t {}".format(
        user_data['following']) + "\n\n\tPublic repos - \t {}".format(
        user_data['public_repos']) + "\n\n\tRepos_url - \t{}".format(
        user_data['repos_url']) + "\n\n\tBio - \t {}".format(
        user_data['bio'])

    # Frame2

    frame2 = LabelFrame(root, width=70, height=150)
    frame2.grid(row=0, column=1, padx=5, pady=5)

    # Text field

    t1 = Text(frame2, width=70, font=("Arial", 10))
    t1.insert(INSERT, a)

    t1.grid(row=2, column=1)
    t1.configure(state='disabled')

    # function for more button

    def more():
        # storing data in a string

        b = "\n\n\tUpdated At - \t{}".format(
            user_data['updated_at']) + "\n\n\tSite Admin - \t{}".format(
            user_data['site_admin']) + "\n\n\tHireable - \t{}".format(
            user_data['hireable']) + "\n\n\tNode Id - \t{}".format(
            user_data['node_id']) + "\n\n\tSubscription Url - \t{}".format(
            user_data['subscriptions_url']) + "\n\n\tType - \t{}".format(
            user_data['type']) + "\n\n\tUrl - \t{}".format(user_data['url'])

        # Frame3

        frame3 = LabelFrame(root, width=75, height=150)
        frame3.grid(row=0, column=2)

        # Text field

        t2 = Text(frame3, font=("Arial", 10))
        t2.insert(INSERT, b)
        t2.grid(row=2, column=1)
        t2.configure(state='disabled')

        # Show another function

        def show_another():
            # destroying frames other than main frame

            frame2.destroy()
            frame3.destroy()

            # deleting the text in the entry box

            e1.delete(0, END)

        # show another button

        show_another_button = Button(frame1, text="Check Another", command=show_another, bg="yellow", anchor=W,
                                     fg="black")
        show_another_button.grid(row=13, column=1)

    # create a button for more data

    more_button = Button(frame2, text="More info", command=more, bg="yellow", fg="black")
    more_button.grid(row=13, column=1)


#  creating button - Show details

show_details_button = Button(frame1, text="Show Details", command=show_details, bg="yellow", fg="black")
show_details_button.grid(row=7, columnspan=2, padx=10, pady=20)


# credits function

def credits_for_project():
    credit_string = "\n\n\t\t\tCREDITS--\n\n\tTHIS BASIC APPLICATION COULD NOT HAVE BEEN DONE WITHOUT\n\n" \
                    "\tTHE HELP OF -\n\n" \
                    "\tGOOGLE , TUTORIALSPOINT, GEEKSFORGEEKS. \n\n" \
                    "\tI was not aware about all the widgets in TKINTER PYTHON and \n\n" \
                    "\tcreating a connection between host site and customer.\n\n" \
                    "\tI took some basic help from these sites.\n\n" \
                    "\tTHANK YOU !\n\n" \
                    "\twww.google.com\n\n" \
                    "\twww.tutorialspoint.com\n\n" \
                    "\twww.geeksforgeeks.org"

    credit_frame = LabelFrame(root, width=75, height=150)
    credit_frame.grid(row=0, column=2)

    t2 = Text(credit_frame, font=("Arial", 10))
    t2.insert(INSERT, credit_string)
    t2.grid(row=2, column=1)
    t2.configure(state='disabled')


# Credit button

credits_button = Button(root, text="Credits", command=credits_for_project, fg="blue")
credits_button.grid(row=15, column=1)


# About this Application Function

def about_this_application():
    about_text = "\t\tLittle About me --\n\nHello I'm currently a 1st year student in\n\n" \
                 "Institute of Technical Education and Research\n\n" \
                 "This is my 1st attempt in any coding competition.\n\n\t\tLittle about Project--\n\n" \
                 "Here I present you a very basic application which can extract data\n\n" \
                 "from GITHUB profile. The modules used are -\n\n" \
                 "TKINTER, PYTHON\n\n" \
                 "REQUESTS/HTTPBasicAUTH, PYTHON\n\n" \
                 "Tkinter is used to create GUI , while requests\n\n" \
                 "HTTPBasicAUTH is used to create a connection between host site and customer.\n" \
                 "After the connection is made we simply request for the data\n\n" \
                 "and store it in a variable, since the data extracted is quite complex\n\n" \
                 "I have used JSON to extract data from the variable.\n\n" \
                 "THANK YOU !"

    about_frame = LabelFrame(root, width=75, height=150)
    about_frame.grid(row=0, column=2)

    t2 = Text(about_frame, font=("Arial", 10))
    t2.insert(INSERT, about_text)
    t2.grid(row=2, column=1)
    t2.configure(state='disabled')


about_button = Button(root, text="About:", command=about_this_application, fg="blue", anchor=W)
about_button.grid(row=10, column=0)

root.mainloop()
