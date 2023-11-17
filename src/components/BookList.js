import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (

    <main>
      <ul className="books">
        {books.map((book) => (
          <Book
            title={book.title.name}
            author={book.title.author}
            category={book.category}
            key={book.item_id}
            id={book.item_id}
          />
        ))}
      </ul>
      <div className="form-container">
        <h4>ADD NEW BOOK</h4>
        <InputBook />
      </div>
    </main>
  );
};

export default BookList;
