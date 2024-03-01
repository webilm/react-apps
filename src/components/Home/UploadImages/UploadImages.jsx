import React from 'react';
import './UploadImages.css'
import UploadImagesMenu from './UploadImagesMenu';

const UploadImages = () => {
    return (
        <div className='container upload-images'>
            <div>
                <ul>
                    <li className='upload-images-li'>
                        <a className='upload-images-a' href="/address/new">
                            New Product
                            <span className='upload-images-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/products/admin">
                            All Products
                            <span className='upload-images-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/orders/admin">
                            All Orders
                            <span className='upload-images-span'>(Admin)</span>
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/users/admin">
                            All Users
                            <span className='upload-images-span'>(Admin)</span>
                        </a>
                    </li >
                    <li className='upload-images-li upload-images-hr'>
                        <a href="/me">
                            Your Profile
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/user/order">
                            Orders
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/me/update">
                            Update Profile
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href="/me/update_password">
                            Update Password
                        </a>
                    </li>
                    <li className='upload-images-li'>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <UploadImagesMenu />
            </div>
        </div>
    )
}

export default UploadImages