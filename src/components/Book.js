import React from 'react';
import { useDispatch } from 'react-redux';
// import your Action Creators
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <button type="button" id={id} onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
