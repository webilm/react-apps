import React, { useState } from 'react';
import './UpdateLogin.css';
import { auth, createUserWithEmailAndPassword } from './FirebaseLogin';

const UpdateLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, '');
      const user = userCredential.user;
      if (user) {
        alert('Account created successfully');
        console.log(`Name: ${name}, Email: ${email}, Role: ${role}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="update-login-signup">
      <div className="update-login-header">
        <h2>Update Users</h2>
      </div>
      <div className="update-login-box">
        <p>Full Name</p>
        <input type="text" value={name} placeholder="Type your name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="update-login-box">
        <p>Email</p>
        <input type="text" value={email} placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <select
          className="update-login-section"
          name="category"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <button className="update-login-button-signup" onClick={submit}>
        Update
      </button>
    </div>
  );
};

export default UpdateLogin;