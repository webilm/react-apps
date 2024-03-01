import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className='home'>
            <header className="text-center">
                <h1 className="text-3xl my-10 font-bold">Components List</h1>
                <a href="/home"><p className="text-xl">Homepage</p></a>
                <a href="/product/details"><p className="text-xl">Product Details</p></a>
                <a href="/cart"><p className="text-xl">Cart</p></a>
                <a href="/login"><p className="text-xl">Login</p></a>
                <a href="/register"><p className="text-xl">Register</p></a>
                <a href="/shipping"><p className="text-xl">Shipping</p></a>
                <a href="/profile"><p className="text-xl">Profile</p></a>
                <a href="/address/new"><p className="text-xl">Add new address</p></a>
                <a href="/update/profile"><p className="text-xl">Update Profile</p></a>
                <a href="/update/password"><p className="text-xl">Update Password</p></a>
                <a href="/user/order"><p className="text-xl">User Order</p></a>
                <a href="/new/product"><p className="text-xl">New Product</p></a>
                <a href="/products/admin"><p className="text-xl">All Products Admin</p></a>
                <a href="/upload/images"><p className="text-xl">Upload Images</p></a>
                <a href="/orders/admin"><p className="text-xl">Orders Admin</p></a>
                <a href="/update/order"><p className="text-xl">Update Order</p></a>
                <a href="/users/admin"><p className="text-xl">Users Admin</p></a>
                <a href="/update/user/admin"><p className="text-xl">Update User Admin</p></a>
            </header>
        </div>
    );
};

export default Menu;