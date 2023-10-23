import random

def play_game():
    choices = ['rock', 'paper', 'scissors']

    user_score = 0
    bot_score = 0

    for _ in range(3):
        user_choice = input("Enter your choice (rock, paper, or scissors): ").lower()
        bot_choice = random.choice(choices)

        if user_choice not in choices:
            print("Invalid choice. Please choose from rock, paper, or scissors.")
            continue

        print(f"You chose {user_choice}. Bot chose {bot_choice}.")

        if user_choice == bot_choice:
            print("It's a tie!")
        elif (user_choice == 'rock' and bot_choice == 'scissors') or (user_choice == 'paper' and bot_choice == 'rock') or (user_choice == 'scissors' and bot_choice == 'paper'):
            print("You win this round!")
            user_score += 1
        else:
            print("Bot wins this round!")
            bot_score += 1

    if user_score > bot_score:
        print("You win the game!")
    elif user_score < bot_score:
        print("Bot wins the game!")
    else:
        print("It's a tie in the game!")

if __name__ == "__main__":
    play_game()
