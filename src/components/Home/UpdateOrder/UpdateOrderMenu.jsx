import React, { useState } from 'react';
import './UpdateOrderMenu.css';
import image from './UpdateOrder/reactloge.png';

const UpdateOrderMenu = () => {
    const [orderStatus, setOrderStatus] = useState('Processing');
    const [submitted, setSubmitted] = useState(false);

    const handleStatusChange = (event) => {
        setOrderStatus(event.target.value);
        setSubmitted(false);
    };

    const handleSubmit = () => {
        if (submitted) {
            alert('Do not enter your information more than twice!');
        } else {
            alert(`Order status updated: ${orderStatus}`);
            setSubmitted(true);
        }
    };

    return (
        <div className="update-cards">
            <div className="update-cards-item">
                <div>
                    <p className="update-cards-text-p">
                        <span>Order ID: 34345454 </span>
                        <span className="update-cards-span">• {orderStatus}</span>
                    </p>
                    <p className="update-cards-date-p">2023-23-12</p>
                </div>
                <div className="update-cards-card-item">
                    <div>
                        <p className="update-cards-item-p">Person</p>
                        <ul className="update-cards-navbar">
                            <li>Mahmud</li>
                            <li>Phone: 1234567897</li>
                            <li>Email: mahmud@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <p className="update-cards-item-p">Delivery address</p>
                        <ul className="update-cards-navbar">
                            <li>123 street</li>
                            <li>Orlando, FL, 12345</li>
                            <li>US</li>
                        </ul>
                    </div>
                    <div>
                        <p className="update-cards-item-p">Payment</p>
                        <ul className="update-cards-navbar">
                            <li className="update-cards-navbar-li">PAID</li>
                            <li>Tax paid: $12</li>
                            <li>Total paid: $343</li>
                        </ul>
                    </div>
                </div>
                <hr className="update-cards-hr" />
                <div className="update-cards-image">
                    <img className="update-cards-image-img" src={image} height="60" width="60" alt="Title" />
                    <div>
                        <p className="update-cards-image-p">Product 1</p>
                        <p className="update-cards-image-p">1x = $23</p>
                    </div>
                </div>
                <hr className="update-cards-hr" />
                <p>Update Order Status</p>
                <select
                    className="update-cards-section"
                    name="category"
                    required=""
                    value={orderStatus}
                    onChange={handleStatusChange}
                >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
                <button className="update-cards-button" type="submit" onClick={handleSubmit}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default UpdateOrderMenu;