import React from 'react';
import './ProductsAdminMenu.css'

const ProductAdminMenu = () => {
    return (
        <div className='products-admin-menu'>
            <div>
                <h1>12 Products</h1>
                <div className='products-admin-menu-text'>
                    <div className=''>
                        <p className='products-admin-menu-p'>Name</p>
                        <p className='products-admin-menu-p2'>Product name</p>
                    </div>
                    <div className=''>
                        <p className='products-admin-menu-p'>Stock</p>
                        <p className='products-admin-menu-p2'>12</p>
                    </div>
                    <div className=''>
                        <p className='products-admin-menu-p'>Price</p>
                        <p className='products-admin-menu-p2'>$456</p>
                    </div>
                    <div className=''>
                        <p className='products-admin-menu-p'>Actions</p>
                        <div>
                                    <a className='products-admin-menu-a' href="/admin/products/upload_images">.</a>
                                    <a className='products-admin-menu-a' href="/admin/products">.</a>
                                    <a className='products-admin-menu-a' href="/admin/products">.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAdminMenu;