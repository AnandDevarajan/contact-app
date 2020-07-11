import React, { useState } from 'react';
import { Container } from 'reactstrap';
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.valu });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submit');
  };

  return (
    <Container fluid>
      <h1 className='text-center text-dark'>
        Account <span className='text-success'>Signin</span>
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
