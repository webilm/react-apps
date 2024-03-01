import React, { useState } from 'react';
import './Register.css';
import { auth, createUserWithEmailAndPassword } from './firebaseConfig';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      if (user) {
        alert('Account created successfully');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='register-main-container-signup'>
      <div className='register-header'>
        <h2>Register Account</h2>
      </div>
      <div className='register-box'>
        <p>Full Name</p>
        <input type='text' value={name} placeholder='Type your user' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='register-box'>
        <p>Email</p>
        <input type='text' value={email} placeholder='Type your email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='register-box'>
        <p>Password</p>
        <input type='password' value={pass} placeholder='Type your Password' onChange={(e) => setPass(e.target.value)} />
      </div>
      <button className='register-button-signup' onClick={submit}>
        Register
      </button>
      <hr className='register-hr'/>
      <p className='register-text'>
        Already have an account? <a href="login">Sign in</a>
      </p>
    </div>
  );
};

export default Register;
