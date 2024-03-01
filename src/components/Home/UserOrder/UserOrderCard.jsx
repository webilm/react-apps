import React from 'react';
import './UserOrderCard.css';
import image from './UserOrder/reactloge.png'


const UserOrderCard = () => {
    return (
        <div className='user-order-card'>
            <h3 className='user-order-h3'>Your Orders</h3>
            <div className='user-order-item'>
                <div>
                    <p className='user-order-text-p'><span>Order ID: 34345454 </span>• Processing</p>
                    <p className='user-order-date-p'>2023-23-12</p>
                </div>
                <div className='user-order-card-item'>
                    <div>
                        <p className='user-order-item-p'>Person</p>
                        <ul className='user-order-navbar'>
                            <li>Mahmud</li>
                            <li>Phone: 1234567897</li>
                            <li>Email: mahmud@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <p className='user-order-item-p'>Delivery address</p>
                        <ul className='user-order-navbar'>
                            <li>123 street</li>
                            <li>Orlando, FL, 12345</li>
                            <li>US</li>
                        </ul>
                    </div>
                    <div>
                        <p className='user-order-item-p'>Payment</p>
                        <ul className='user-order-navbar'>
                            <li className='user-order-navbar-li'>PAID</li>
                            <li>Tax paid: $12</li>
                            <li>Total paid: $343</li>
                        </ul>
                    </div>
                </div>
                <hr className='user-order-hr'/>
                <div className='user-order-image'>
                    <img className='user-order-image-img' src={image} height="60" width="60" alt="Title" />
                    <div>
                        <p className='user-order-image-p'>Product 1</p>
                        <p className='user-order-image-p'>1x = $23</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOrderCard