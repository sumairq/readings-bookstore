import React from 'react';
import Header from '../components/Header';
import InputBook from '../components/InputBook';
import BookList from '../components/BookList';

const Books = () => (
  <div>
    <Header />
    <section>
      <BookList />
    </section>
    <h2>Add New Book</h2>
    <InputBook />
  </div>
);

export default Books;
