import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Blog
      </Link>
      <Link to="/new-post" className="btn btn-primary">
        New Post
      </Link>
    </nav>
  );
};

export default Header;