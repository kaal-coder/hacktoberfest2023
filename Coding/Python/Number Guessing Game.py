# Number Guessing Game
# This program generates a random number and asks the player to guess it.
# It provides feedback on whether the guess is too high or too low until the correct number is guessed.

import random

def guess_number():
    # Generate a random number between 1 and 100 (inclusive)
    secret_number = random.randint(1, 100)
    
    attempts = 10  # Initialize the number of attempts
    
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    
    while True:
        try:
            # Ask the player for their guess
            guess = int(input("Guess the number: "))
            
            # Increment the number of attempts
            attempts += 1
            
            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts!")
                break  # Exit the loop if the guess is correct
        
        except ValueError:
            print("Invalid input. Please enter a valid number.")

if __name__ == "__main__":
    guess_number()
