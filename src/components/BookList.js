import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
        />
      ))}
      <div>
        <h2>Add New Book</h2>
        <InputBook />
      </div>
    </div>
  );
};

export default BookList;
