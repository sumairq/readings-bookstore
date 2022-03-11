import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { fetchBooks } from '../redux/books/books';

import BookList from '../components/BookList';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  return (
    <div>
      <Header />
      <section>
        <BookList />
      </section>
    </div>
  );
};

export default Books;
