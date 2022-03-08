import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

const dummyData = [{
  title: 'Dunes',
  author: 'Frank Herbert',
  genre: 'Action',
  id: 1,
},
{
  title: 'Alchemist',
  author: 'Paulo Cohelo',
  genre: 'Fiction',
  id: 2,
},
];
const BookList = () => (
  <div>
    {dummyData.map((book) => (
      <Book title={book.title} genre={book.genre} author={book.author} key={book.id} />
    ))}
    <div>
      <h2>Add New Book</h2>
      <InputBook />
    </div>
  </div>
);

export default BookList;
