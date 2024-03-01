import React from 'react';
import './OrdersAdminMenu.css'

const OrdersAdminMenu = () => {
    return (
        <div className='orders-admin-menu'>
            <div>
                <h1>12 Orders</h1>
                <div className='orders-admin-menu-text'>
                    <div className=''>
                        <p className='orders-admin-menu-p'>ID</p>
                        <p className='orders-admin-menu-p2'>12345667</p>
                    </div>
                    <div className=''>
                        <p className='orders-admin-menu-p'>AMOUNT PAID</p>
                        <p className='products-admin-menu-p2'>$232</p>
                    </div>
                    <div className=''>
                        <p className='orders-admin-menu-p'>STATUS</p>
                        <p className='orders-admin-menu-p2'>Processing</p>
                    </div>
                    <div className=''>
                        <p className='orders-admin-menu-p'>Actions</p>
                        <div>
                                    <a className='orders-admin-menu-a' href="/admin/products/upload_images">.</a>
                                    <a className='orders-admin-menu-a' href="/admin/products">.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersAdminMenu;