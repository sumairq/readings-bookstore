/* eslint-disable */ 
import React from 'react';
import Book from './Book';

const dummyData = [{
  title: 'Dunes',
  author: 'Frank Herbert',
  genre: 'Action',
},
{
  title: 'Alchemist',
  author: 'Paulo Cohelo',
  genre: 'Fiction',
},
];
const BookList = () => (
  <div>
    {dummyData.map((book) => (
      <Book title={book.title} genre={book.genre} author={book.author} />
    ))}
  </div>
);

export default BookList;
