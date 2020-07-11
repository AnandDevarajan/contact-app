import React, { useReducer } from 'react';
import uui from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        id: '1',
        name: 'ted johnson',
        email: 'ted@gmail.com',
        phone: '222-222-222',
      },
      {
        type: 'professional',
        id: '2',
        name: 'logan',
        email: 'logan@gmail.com',
        phone: '222-222-234',
      },
      {
        type: 'professinal',
        id: '3',
        name: 'mary',
        email: 'mary@gmail.com',
        phone: '222-444-444',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Cleat current Contact

  //update Contact

  //filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
