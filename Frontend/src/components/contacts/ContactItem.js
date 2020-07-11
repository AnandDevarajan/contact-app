import React, { useContext } from 'react';
import { Badge, BadgeProps } from 'reactstrap';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';
const contactContext = useContext(ContactContext);
const { deleteContact } = contactContext;
const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };
  return (
    <div className='card bg-dark' style={{ border: 'None', color: '#50d890' }}>
      <h3 className='text-left'>
        {name.charAt(0).toUpperCase() + name.slice(1)}{' '}
        <Badge
          style={{ float: 'right' }}
          color={type === 'personal' ? 'success' : 'dark'}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </h3>
      <ul className='list'>
        {email && (
          <li style={{ color: 'white' }}>
            <i className='fa fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li style={{ color: 'white' }}>
            <i className='fa fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={onDelete}>
          Edit
        </button>{' '}
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};
ContactItem.prototypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
