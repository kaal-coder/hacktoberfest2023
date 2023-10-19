# URL Shortener Program
# This program generates short URLs for long URLs and provides redirection to the original URL.

import hashlib

# Dictionary to store URL mappings (short URL to long URL)
url_mapping = {}

def generate_short_url(long_url):
    # Hash the long URL to generate a unique identifier
    hash_object = hashlib.md5(long_url.encode())
    hash_hex = hash_object.hexdigest()
    
    # Take the first 8 characters of the hash as the short URL
    short_url = hash_hex[:8]
    
    return short_url

def shorten_url():
    print("Welcome to the URL Shortener!")
    long_url = input("Enter the long URL to shorten: ")
    
    # Check if the long URL is already in the mapping
    if long_url in url_mapping:
        print("Short URL: " + url_mapping[long_url])
    else:
        # Generate a new short URL and add it to the mapping
        short_url = generate_short_url(long_url)
        url_mapping[long_url] = short_url
        print("Short URL: " + short_url)

def redirect_url():
    short_url = input("Enter the short URL to redirect: ")
    
    # Check if the short URL exists in the mapping
    if short_url in url_mapping.values():
        # Find the corresponding long URL
        long_url = next(key for key, value in url_mapping.items() if value == short_url)
        print("Redirecting to the original URL: " + long_url)
    else:
        print("Short URL not found. Please enter a valid short URL.")

if __name__ == "__main__":
    while True:
        print("\nMenu:")
        print("1. Shorten a URL")
        print("2. Redirect a URL")
        print("3. Exit")
        
        choice = input("Select an option (1/2/3): ")
        
        if choice == "1":
            shorten_url()
        elif choice == "2":
            redirect_url()
        elif choice == "3":
            break
        else:
            print("Invalid choice. Please select a valid option.")
