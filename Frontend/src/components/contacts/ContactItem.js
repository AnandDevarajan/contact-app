import React from 'react';
import { Badge, BadgeProps } from 'reactstrap';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-left'>
        {name}{' '}
        <Badge color={type === 'personal' ? 'success' : 'dark'}>{type}</Badge>
      </h3>
    </div>
  );
};

export default ContactItem;
