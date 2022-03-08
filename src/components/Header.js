import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Bookstore</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </div>
);

export default Header;
