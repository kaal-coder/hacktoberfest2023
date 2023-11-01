import re

def password_strength(password):
    if len(password) < 8:
        return "Weak"
    elif re.search("[a-z]", password) and re.search("[A-Z]", password) and re.search("[0-9]", password) and re.search("[!@#$%^&*]", password):
        return "Strong"
    else:
        return "Moderate"

password = input("Enter your password: ")
print("Password strength: " + password_strength(password))
