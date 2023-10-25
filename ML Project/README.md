# Book Recommendation System

## Overview

This project is a book recommendation system built using Python, Streamlit, and scikit-learn's Nearest Neighbors algorithm. The system recommends books to users based on various criteria, including publishers, authors, and languages.

You can see the Website here : [Link to Website](https://readnext.streamlit.app/)


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the App](#running-the-app)
- [Data](#data)
- [Recommendation System](#recommendation-system)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the application, you need to have the following prerequisites installed on your system:

- Python 3.7 or higher
- Streamlit
- pandas
- scikit-learn
- matplotib

You can install these dependencies using `requirements.txt` file in the project directory:

```bash
pip install -r requirements.txt
```

### Installation

1. Clone the repository to your local machine:

```bash
https://github.com/manascb1344/Book-Recommender-System
```

2. Change into the project directory:

```bash
cd Book-Recommender-System
```

3. Run the Streamlit app:

```bash
streamlit run app.py
```

## Usage

### Running the App

1. After starting the app, you will see a Streamlit web interface in your browser.

2. Select the "Recommender Type" from the sidebar. You can choose between "Publisher," "Author," or "Language."

3. Depending on your selection, you can further refine your choice by selecting specific publishers, authors, or languages.

4. The app will provide a list of recommended books based on your criteria.

## Data

The dataset used for this project includes information about various books, including titles, authors, publishers, publication dates, languages, and average ratings. The data has been preprocessed and cleaned for use in the recommendation system.

## Recommendation System

The recommendation system uses scikit-learn's Nearest Neighbors algorithm to find books that are similar to the user's preferences. The system filters and sorts books based on the selected criteria (publisher, author, or language) and presents the top 10 recommendations.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to include more specific details about your project, such as acknowledgments, additional instructions, or any other relevant information.

