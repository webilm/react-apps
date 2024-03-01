import React from 'react';
import './UpdatePassword.css';
import FirebasePassword from './FirebasePassword';

const UpdatePassword = () => {
    return (
        <div className='container update-password'>
            <div>
                <ul>
                    <li className='update-password-li'>
                        <a className='update-password-a' href="/address/new">
                            New Product
                            <span className='update-password-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='update-password-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='update-password-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='update-password-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='update-password-li update-password-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='update-password-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <FirebasePassword />
            </div>
        </div>
    );
};

export default UpdatePassword;