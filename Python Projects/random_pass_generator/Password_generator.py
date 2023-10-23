
import random
import string

def generate_random_password(length, use_uppercase, use_digits, use_special_chars):
    characters = string.ascii_lowercase
    if use_uppercase:
        characters += string.ascii_uppercase
    if use_digits:
        characters += string.digits
    if use_special_chars:
        characters += string.punctuation

    if length < 8:
        print("Password length is too short. It should be at least 8 characters.")
        return

    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# User preferences
password_length = int(input("Enter the desired password length: "))
include_uppercase = input("Include uppercase letters? (yes/no): ").lower() == "yes"
include_digits = input("Include digits? (yes/no): ").lower() == "yes"
include_special_chars = input("Include special characters? (yes/no): ").lower() == "yes"

password = generate_random_password(password_length, include_uppercase, include_digits, include_special_chars)

if password:
    print("Generated Password: ", password)


