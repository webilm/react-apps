import React from 'react';
import './NewProduct.css'
import NewProductMenu from './NewProductMenu';


const NewProduct = () => {
    return (
        <div className='container new-product'>
            <div>
                <ul>
                    <li className='new-product-li'>
                        <a className='new-product-a' href="/address/new">
                            New Product
                            <span className='new-product-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='new-product-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='new-product-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='new-product-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='new-product-li new-product-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='new-product-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <NewProductMenu />
        </div>
    );
};

export default NewProduct;