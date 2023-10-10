from PyQt5 import QtCore , QtWidgets , QtGui
from PyQt5.QtGui import QMovie
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from PyQt5.QtCore import Qt , QTimer , QTime , QDate
from alexanew import Ui_MainWindow
import sys
import main


class MainThread(QThread):

    def __init__(self):
        super(MainThread, self).__init__()

    def run(self):
        self.Task_Gui()

    def Task_Gui(self):
        main.start()


startFunctions = MainThread()


class Gui_Start(QMainWindow):

    def __init__(self):
        super().__init__()

        self.jarvis_ui = Ui_MainWindow()

        self.jarvis_ui.setupUi(self)

        self.jarvis_ui.pushButton_2.clicked.connect(self.startFunc)

        self.jarvis_ui.pushButton_3.clicked.connect(self.close)

    def startFunc(self):
        self.jarvis_ui.movies = QtGui.QMovie("../../PycharmProjects/pythonProject/blackwomen.gif")

        self.jarvis_ui.gui_1.setMovie(self.jarvis_ui.movies)

        self.jarvis_ui.movies.start()

        self.jarvis_ui.movies_2 = QtGui.QMovie(
            "../../PycharmProjects/pythonProject/soundwaves.gif")

        self.jarvis_ui.gui_2.setMovie(self.jarvis_ui.movies_2)

        self.jarvis_ui.movies_2.start()

        self.jarvis_ui.movies_3 = QtGui.QMovie(
            "../../PycharmProjects/pythonProject/systeminitial.gif")

        self.jarvis_ui.gui_3.setMovie(self.jarvis_ui.movies_3)

        self.jarvis_ui.movies_3.start()

        self.jarvis_ui.movies_4 = QtGui.QMovie("../../PycharmProjects/pythonProject/alexa.gif")

        self.jarvis_ui.terminal.setMovie(self.jarvis_ui.movies_4)

        self.jarvis_ui.movies_4.start()

        startFunctions.start()


Gui_App = QApplication(sys.argv)

Gui_Jarvis = Gui_Start()

Gui_Jarvis.show()

exit(Gui_App.exec_())