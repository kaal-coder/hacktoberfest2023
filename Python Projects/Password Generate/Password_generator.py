import random
import string

def generate_password(length, include_uppercase, include_lowercase, include_digits, include_symbols):
    characters = ''
    
    if include_uppercase:
        characters += string.ascii_uppercase
    if include_lowercase:
        characters += string.ascii_lowercase
    if include_digits:
        characters += string.digits
    if include_symbols:
        characters += string.punctuation
    
    if not characters:
        print("Please select at least one character set to include in the password.")
        return
    
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

if __name__ == "__main__":
    print("Welcome to the Random Password Generator!")
    length = int(input("Enter the desired password length: "))
    include_uppercase = input("Include uppercase letters? (yes/no): ").lower() == 'yes'
    include_lowercase = input("Include lowercase letters? (yes/no): ").lower() == 'yes'
    include_digits = input("Include digits? (yes/no): ").lower() == 'yes'
    include_symbols = input("Include symbols? (yes/no): ").lower() == 'yes'
    
    password = generate_password(length, include_uppercase, include_lowercase, include_digits, include_symbols)
    
    if password:
        print(f"Your generated password is: {password}")
    else:
        print("No password was generated due to invalid settings.")