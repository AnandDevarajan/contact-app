import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar" style={{backgroundColor:"black",color:"#50d890"}}>
      <h1>
        <i className={icon} />
        {title}
      </h1>
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
