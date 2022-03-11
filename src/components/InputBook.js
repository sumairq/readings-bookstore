import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooksToApi } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(), // make sure it's unique
      title: book.title,
      author: book.author,
      category: book.category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBooksToApi(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={book.title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Author Name"
        name="author"
        value={book.author}
        onChange={onChange}
      />
      <select name="category" id="category" value={book.category} onChange={onChange}>
        <option value="Fiction">Fiction</option>
        <option value="Mystery">Mystery</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science">Science</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputBook;
