#!/usr/bin/python
# -*- coding: utf-8 -*-
import streamlit as st
import pandas as pd
from sklearn import neighbors
from sklearn.preprocessing import MinMaxScaler


def main():

    df = pd.read_csv('final.csv')
    dforigin = pd.read_csv('dfbeforeprocess.csv')
    df.set_index('title', inplace=True)
    model = neighbors.NearestNeighbors(n_neighbors=5,
            algorithm='ball_tree', metric='euclidean')
    model.fit(df)

    st.title('Book Recommendation App')

    sidebar = st.sidebar.selectbox('Select Recommender Type',
                                   ['Publisher', 'Author', 'Language'])

    def rec_book_publisher(publisher_name):
        publisher_books = dforigin[dforigin['publisher']
                                   == publisher_name][['title',
                'average_rating']]
        publisher_books = \
            publisher_books.sort_values(by='average_rating',
                ascending=False)
        return publisher_books.head(10)

    # Recommendation function based on Author

    def rec_book_author(author_name):
        author_books = dforigin[dforigin['authors']
                                == author_name][['title',
                'average_rating']]
        author_books = author_books.sort_values(by='average_rating',
                ascending=False)
        return author_books.head(10)

    # Recommendation function based on Language

    def rec_book_lang(lang):
        lang_books = dforigin[dforigin['language_code']
                              == lang][['title', 'average_rating']]
        lang_books = lang_books.sort_values(by='average_rating',
                ascending=False)
        return lang_books.head(10)

    if sidebar == 'Publisher':
        publisher_name = st.selectbox('Select Publisher',
                list(dforigin['publisher'].value_counts().index))
        rec_books = rec_book_publisher(publisher_name)
    elif sidebar == 'Author':
        author_name = st.selectbox('Select Author',
                                   list(dforigin['authors'
                                   ].value_counts().index))
        rec_books = rec_book_author(author_name)
    elif sidebar == 'Language':
        lang = st.selectbox('Select Language',
                            list(dforigin['language_code'
                            ].value_counts().index))
        rec_books = rec_book_lang(lang) 
        #pro manas

    st.subheader('Recommended Books')
    st.write(rec_books)


if __name__ == '__main__':
    main()
