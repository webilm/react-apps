import React from 'react';
import './OrdersAdmin.css';
import OrdersAdminMenu from './OrdersAdminMenu';


const OrdersAdmin = () => {
    return (
        <div className='container orders-admin'>
            <div>
                <ul>
                    <li className='orders-admin-li'>
                        <a className='orders-admin-a' href="/address/new">
                            New Product
                            <span className='orders-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='orders-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='orders-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='orders-admin-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='orders-admin-li orders-admin-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='orders-admin-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <OrdersAdminMenu />
            </div>
        </div>
    );
};

export default OrdersAdmin;