import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, genre, author }) => (
  <div>
    <div className="genre">{genre}</div>
    <div className="title">{title}</div>
    <div className="author">{author}</div>
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
