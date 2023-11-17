import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import { FcIdea } from 'react-icons/fc';

const Header = () => (
  <header>
    <FcIdea size={50} />
    <h1>Readings</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
    <span>
      <ImUser />
    </span>
  </header>
);

export default Header;
