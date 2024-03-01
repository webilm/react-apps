import React from 'react';
import './UpdateUserAdmin.css'
import UpdateLogin from './UpdateLogin';

const UpdateUserAdmin = () => {
    return (
        <div className='container update-admin'>
            <div>
                <ul>
                    <li className='update-admin-li'>
                        <a className='update-admin-a' href="/address/new">
                            New Product
                            <span className='update-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='update-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='update-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='update-admin-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='update-admin-li update-admin-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='update-admin-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <UpdateLogin />
        </div>
    );
};

export default UpdateUserAdmin;