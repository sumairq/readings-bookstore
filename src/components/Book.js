/* eslint-disable */
import React from 'react';

const Book = ({ title, genre, author }) => (
  <div>
    <div className="genre">{genre}</div>
    <div className="title">{title}</div>
    <div className="author">{author}</div>
    <button>Delete</button>
  </div>
);

export default Book;
