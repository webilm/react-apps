import React, { useState } from 'react';
import './AddressNew.css';
import AddressFirebase from './AddressFirebase';
import MyForm from './MyForm';

const AddressNew = () => {
  const [addresses, setAddresses] = useState([]);

  const handleAddressAdded = (newAddress) => {
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };


  return (
    <div className='address-new'>
      <section>
        <div className='container address-new-container'>
          <ol>
            <li className=''>
              <a href="/">Breadcrumbs</a>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <div className='container address-menu-container'>
          <div>
            <ul>
              <li className='address-menu-li'>
                <a className='address-navbar-a' href="/address/new">
                  New Product
                  <span className='address-menu-span'>(Admin)</span>
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/products/admin">
                  All Products
                  <span className='address-menu-span'>(Admin)</span>
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/orders/admin">
                  All Orders
                  <span className='address-menu-span'>(Admin)</span>
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/users/admin">
                  All Users
                  <span className='address-menu-span'>(Admin)</span>
                </a>
              </li>
              <li className='address-menu-li address-menu-hr'>
                <a href="/me">
                  Your Profile
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/user/order">
                  Orders
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/me/update">
                  Update Profile
                </a>
              </li>
              <li className='address-menu-li'>
                <a href="/me/update_password">
                  Update Password
                </a>
              </li>
              <li className='address-menu-li'>
                <a href='/'>
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div>
            <AddressFirebase onAddressAdded={handleAddressAdded} />
            <MyForm addresses={addresses} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressNew;