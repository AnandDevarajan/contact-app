import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
  return (
    <div
      className='navbar'
      style={{ backgroundColor: 'black', color: '#50d890' }}
    >
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/' style={{ color: '#50d890' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' style={{ color: '#50d890' }}>
            About
          </Link>
        </li>
        <li>
          <Link to='/signup' style={{ color: '#50d890' }}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link to='/login' style={{ color: '#50d890' }}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'Contact App',
  icon: 'fa fa-id-card',
};
export default Navbar;
