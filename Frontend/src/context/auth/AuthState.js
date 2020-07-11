import React, { useReducer } from 'react';
import AuthContext from './contactContext';
import authReducer from './contactReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
//load user

//register user

//login user

//logout

//clear errors



  return (
    <ContactContext.Provider
      value={{
      
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
