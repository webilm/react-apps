import React from 'react';
import './UsersAdmin.css'
import UsersAdminMenu from './UsersAdminMenu';


const UsersAdmin = () => {
    return (
        <div className='container users-admin'>
            <div>
                <ul>
                    <li className='users-admin-li'>
                        <a className='users-admin-a' href="/address/new">
                            New Product
                            <span className='users-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='users-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='users-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='users-admin-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='users-admin-li users-admin-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='users-admin-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <UsersAdminMenu />
            </div>
        </div>
    );
};

export default UsersAdmin;