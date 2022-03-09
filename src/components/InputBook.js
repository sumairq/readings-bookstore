/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addBook} from '../redux/books/books';
import { v4 as uuidv4 } from "uuid"



const InputBook = () => {
    
     const dispatch = useDispatch();
    const [book, setBook] = useState({
        title: "",
        author: ""
    })

    const onChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })
    }

    
const submitBookToStore = (e) => {
    e.preventDefault()
    const newBook = {
        id: uuidv4(), // make sure it's unique
        title: book.title,
        author: book.author
    }

    // dispatch an action and pass it the newBook object (your action's payload)
     dispatch(addBook(newBook));
    console.log(newBook)
}

  return(
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
    <button type="submit">Submit</button>
  </form>
);
  }

export default InputBook;
