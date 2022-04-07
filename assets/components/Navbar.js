// ! FILES
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/normalize.css';
import '../styles/app.css';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/'} className='nav-btn'>
        <FaHome />
      </Link>
      <Link to={'/api/users'} className='nav-btn'>
        api
      </Link>
      <Link to={'#'} className='nav-btn'>
        login
      </Link>
    </nav>
  );
};

export default Navbar;
