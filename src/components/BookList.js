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
          title={book.title.name}
          author={book.title.author}
          category={book.category}
          key={book.item_id}
          id={book.item_id}
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
