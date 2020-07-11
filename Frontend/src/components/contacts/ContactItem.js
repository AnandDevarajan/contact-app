import React from 'react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-left'>
        {name}
        {' '}
        <span
          className={
            'badge' +
            (type === 'professional' ? 'badge-success' : 'badge-danger')
          }
        >
          {type}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
