#REQUIRED
#pip install requests
#pip install BeautifulSoup4

import requests
from bs4 import BeautifulSoup

# Function to extract and save text to a text file
def extract_text_and_save(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        text_data = soup.get_text()

        with open('extracted_text.txt', 'w', encoding='utf-8') as file:
            file.write(text_data)
        print("Text data extracted and saved to 'extracted_text.txt'.")
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")

# Function to extract and save URLs to a text file
def extract_urls_and_save(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        urls = [a['href'] for a in soup.find_all('a', href=True)]

        with open('extracted_urls.txt', 'w', encoding='utf-8') as file:
            for url in urls:
                file.write(url + '\n')
        print("URLs extracted and saved to 'extracted_urls.txt'.")
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")

# Main program
url = input("Enter the URL you want to scrape: ")
choice = input("Do you want to extract 'text' or 'urls'? ")

if choice.lower() == 'text':
    extract_text_and_save(url)
elif choice.lower() == 'urls':
    extract_urls_and_save(url)
else:
    print("Invalid choice. Please choose 'text' or 'urls'.")
