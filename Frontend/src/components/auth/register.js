import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.valu });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      return toast('Please fill all the fields', { type: 'warning' });
    } else if (password !== password2) {
      return toast('Password not match', { type: 'error' });
    } else {
      console.log('Registered');
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
