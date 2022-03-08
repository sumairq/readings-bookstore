import React from 'react';

const InputBook = () => (
  <form>
    <input
      type="text"
      placeholder="Book Name"
      name="title"
    />
    <input
      type="text"
      placeholder="Author Name"
      name="author"
    />
    <button type="submit">Submit</button>
  </form>
);

export default InputBook;
