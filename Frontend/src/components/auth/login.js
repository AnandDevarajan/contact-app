import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'reactstrap';
import AuthContext from '../../context/auth/authContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error !== null) {
      toast('Email and password does not match', { type: 'error' });
      clearErrors();
    }
    //eslint -disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast('Please fill all fields', { type: 'warning' });
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Container fluid>
      <ToastContainer position='top-center' />
      <h1 className='text-center text-dark'>
        Account <span className='text-success'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            style={{ background: 'black', color: 'white' }}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            style={{ background: 'black', color: 'white' }}
          />
        </div>

        <input
          type='submit'
          value='Login'
          className='btn btn-success btn-block'
        />
      </form>
    </Container>
  );
};

export default Login;
