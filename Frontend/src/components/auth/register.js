import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  // const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error !== null) {
      toast('User Already exists', { type: 'error' });
      clearErrors();
    }
    //eslint -disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      return toast('Please fill all the fields', { type: 'warning' });
    } else if (password !== password2) {
      return toast('Password not match', { type: 'error' });
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  return (
    <Container fluid>
      <ToastContainer position='top-center' />

      <h1 className='text-center text-dark'>
        Account <span className='text-success'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            style={{ background: 'black', color: 'white' }}
          />
        </div>
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
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            style={{ background: 'black', color: 'white' }}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-success btn-block'
        />
      </form>
    </Container>
  );
};

export default Register;
