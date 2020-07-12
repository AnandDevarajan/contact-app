import React, { useReducer } from 'react';
import AlertContext from './authContext';
import alertReducer from './authReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AuthState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(authReducer, initialState);

  //SET ALERT

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
