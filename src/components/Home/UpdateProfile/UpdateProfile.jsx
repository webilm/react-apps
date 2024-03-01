import React from 'react';
import './UpdateProfile.css'
import FirebaseAccount from './FirebaseAccount';

const UpdateProfile = () => {
    return (
        <div className='container update-profile'>
            <div>
                <ul>
                    <li className='update-profile-li'>
                        <a className='update-profile-a' href="/address/new">
                            New Product
                            <span className='update-profile-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='update-profile-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='update-profile-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='update-profile-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='update-profile-li update-profile-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='update-profile-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <FirebaseAccount />
            </div>
        </div>
    );
};

export default UpdateProfile;