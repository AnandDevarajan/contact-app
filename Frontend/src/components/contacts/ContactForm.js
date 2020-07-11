import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };
  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 style={{ color: '#50d890' }}>Add Contact</h2>
      <input
        style={{ background: 'black', color: 'white' }}
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        style={{ background: 'black', color: 'white' }}
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        style={{ background: 'black', color: 'white' }}
        type='text'
        placeholder='Phone Number'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5 style={{ color: '#50d890' }}>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      />{' '}
      <span style={{ color: '#50d890' }}> personal </span>
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      />{' '}
      <span style={{ color: '#50d890' }}> professional </span>
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-success btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
