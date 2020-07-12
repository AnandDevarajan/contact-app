import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href='#!'>
          <i className='fa fa-sign-out'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/signup' style={{ color: '#50d890', textDecoration: 'none' }}>
          Sign Up
        </Link>
      </li>
      <li>
        <Link to='/login' style={{ color: '#50d890', textDecoration: 'none' }}>
          Login
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div
      className='navbar'
      style={{ backgroundColor: 'black', color: '#50d890' }}
    >
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
