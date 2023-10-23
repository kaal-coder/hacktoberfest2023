import random

def choose_random_character():
    character_list = ["Naruto", "Goku", "Sailormoon", "Pikachu", "Luffy", "Ichigo"]
    return random.choice(character_list)

def display_character(character, guessed_letters):
    display = ""
    for letter in character:
        if letter in guessed_letters:
            display += letter
        else:
            display += "_"
    return display

def anime_character_hangman():
    character_to_guess = choose_random_character()
    guessed_letters = []
    attempts = 6

    print("Welcome to Anime Character Hangman!")

    while attempts > 0:
        print(display_character(character_to_guess, guessed_letters))
        guess = input(f"Guess a letter ({attempts} attempts left): ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter.")
        elif guess in character_to_guess:
            guessed_letters.append(guess)
            if set(character_to_guess).issubset(guessed_letters):
                print(f"Congratulations! You guessed the character: {character_to_guess}")
                break
        else:
            guessed_letters.append(guess)
            attempts -= 1

    if attempts == 0:
        print(f"Sorry, you're out of attempts. The character was: {character_to_guess}")

if __name__ == "__main__":
    anime_character_hangman()
