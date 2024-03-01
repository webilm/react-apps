import React from 'react';
import './ProductsAdmin.css'
import ProductAdminMenu from './ProductsAdminMenu';


const ProductsAdmin = () => {
    return (
        <div className='container products-admin'>
            <div>
                <ul>
                    <li className='products-admin-li'>
                        <a className='products-admin-a' href="/address/new">
                            New Product
                            <span className='products-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='products-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='products-admin-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='products-admin-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='products-admin-li products-admin-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='products-admin-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ProductAdminMenu />
            </div>
        </div>
    );
};

export default ProductsAdmin;