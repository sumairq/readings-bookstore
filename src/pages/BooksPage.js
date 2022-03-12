import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';

import BookList from '../components/BookList';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  return (
    <main>
      <section>
        <BookList />
      </section>
    </main>
  );
};

export default Books;
