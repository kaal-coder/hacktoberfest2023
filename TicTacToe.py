import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self, master):
        self.master = master
        self.master.title("Tic Tac Toe")
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"
        self.buttons = [[None for _ in range(3)] for _ in range(3)]
        self.create_board()

    def create_board(self):
        for row in range(3):
            for col in range(3):
                button = tk.Button(self.master, text=" ", font=("Arial", 30), width=3, height=1,
                                   command=lambda row=row, col=col: self.handle_click(row, col))
                button.grid(row=row, column=col)
                self.buttons[row][col] = button

    def handle_click(self, row, col):
        if self.board[row][col] == " ":
            self.board[row][col] = self.current_player
            self.buttons[row][col].config(text=self.current_player)
            if self.check_win():
                self.show_win_message()
            elif self.check_draw():
                self.show_draw_message()
            else:
                self.switch_players()

    def check_win(self):
        for i in range(3):
            if self.board[i][0] == self.board[i][1] == self.board[i][2] != " ":
                return True
            if self.board[0][i] == self.board[1][i] == self.board[2][i] != " ":
                return True
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != " ":
            return True
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != " ":
            return True
        return False

    def show_win_message(self):
        message = f"Player {self.current_player} wins!"
        messagebox.showinfo("Game Over", message)
        self.reset_game()

    def check_draw(self):
        for row in range(3):
            for col in range(3):
                if self.board[row][col] == " ":
                    return False
        return True

    def show_draw_message(self):
        messagebox.showinfo("Game Over", "Draw!")
        self.reset_game()

    def switch_players(self):
        if self.current_player == "X":
            self.current_player = "O"
        else:
            self.current_player = "X"

    def reset_game(self):
        for row in range(3):
            for col in range(3):
                self.buttons[row][col].config(text=" ")

if __name__ == '__main__':
    root = tk.Tk()
    tictactoe = TicTacToe(root)
    root.mainloop()
