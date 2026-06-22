import random

characters = { 
    "Anime Heroes": {
        "Naruto": "A ninja from the Hidden Leaf Village",
        "Goku": "Saiyan who loves fighting and food",
        "Luffy": "Pirate with a dream to become Pirate King",
        "Ichigo": "Soul Reaper with orange hair",
        "Saitama": "Hero who defeats enemies with one punch"
    },
    "Pokémon": {
        "Pikachu": "Electric-type Pokémon and Ash's partner",
        "Charizard": "Fire-breathing dragon Pokémon",
        "Bulbasaur": "Grass-type starter Pokémon with a bulb on its back",
        "Squirtle": "Water-type turtle Pokémon"
    }
} #created a list of characters to guess from

def choose_random_character():
    category = random.choice(list(characters.keys())) #making it random so that its engaging.
    character, hint = random.choice(list(characters[category].items()))
    return category, character, hint

def display_character(character, guessed_letters):
    display = ""
    for letter in character:
        if letter.lower() in guessed_letters or not letter.isalpha(): #added case-insensitive
            display += letter + " "
        else:
            display += "_ "
    return display.strip()

def anime_character_hangman():
    category, character_to_guess, hint = choose_random_character()
    guessed_letters = set()
    attempts = 8

    print("🎮 Welcome to Anime Character Hangman! 🎮")
    print(f"Category: {category}")
    print(f"Hint: {hint}")

    while attempts > 0:
        print("\nWord:", display_character(character_to_guess, guessed_letters))
        guess = input(f"Guess a letter ({attempts} attempts left): ").lower().strip()

        if len(guess) != 1 or not guess.isalpha():
            print("❗ Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("⚠️ You already guessed that letter.") #added emojis to make it look more interactive
            continue

        guessed_letters.add(guess)

        if guess in character_to_guess.lower():
            print("✅ Good guess!")
            if all(letter.lower() in guessed_letters or not letter.isalpha() for letter in character_to_guess):
                print(f"\n🎉 Congratulations! You guessed it right: {character_to_guess}")
                break
        else:
            attempts -= 1
            print("❌ Wrong guess!")

    if attempts == 0:
        print(f"\n😢 You're out of attempts. The character was: {character_to_guess}")

if __name__ == "__main__":
    anime_character_hangman()
