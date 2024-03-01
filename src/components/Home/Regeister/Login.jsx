import React, { useState } from 'react';
import './Login.css';
import { auth, signInWithEmailAndPassword } from './firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, pass);
            if (user) {
            alert('Login successfully');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='login-main-container-signup'>
            <div className='login-header'>
                <h2>Login</h2>
            </div>
            <div className='login-box'>
                <p>Email</p>
                <input type='text' value={email} placeholder='Type your email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='login-box'>
                <p>Password</p>
                <input type='password' value={pass} placeholder='Type your password' onChange={(e) => setPass(e.target.value)} />
            </div>
            <button className='login-button-signup' onClick={submit}>
                Login
            </button>
            <hr className='register-hr'/>
            <p className='login-text'>
                Don't have an Account <a href="/register">Register</a>
            </p>
        </div>
    );
};

export default Login;