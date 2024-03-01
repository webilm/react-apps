import React, { useState } from 'react';
import './Shipping.css';
import image from '../Shipping/ShippingImg/reactloge.png'

const Shipping = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleDivClick = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <div className='shipping'>
                <div className='container shipping-container'>
                    <ol>
                        <li className=''>
                            <a href="/">Breadcrumbs</a>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='container shipping-container-menu'>
                <div className='shipping-box-menu'>
                    <h2 className='shipping-h2-1'>
                        Shipping information
                    </h2>
                    <div className='shipping-box-cart'>
                        <div className='shipping-box-label' onClick={handleDivClick}>
                            <span>
                                <input name='shipping' type="radio" className='shipping-box-radio' checked={isChecked}/>
                            </span>
                            <p>
                                <span className='shipping-box-span'>1295 street</span>
                                <small className='shipping-box-small'>
                                    <br />Orlando, FL, 84753
                                    <br />US
                                    <br />9871234576
                                </small>
                            </p>
                        </div>
                    </div>
                    <button className='shipping-box-button'>Add new address</button>
                    <div className='shipping-box-button-2'>
                        <button className='shipping-box-back'><a href="/">Back</a></button>
                        <button className='shipping-box-checkoud'><a href="/cart">Back</a></button>
                    </div>
                </div>
                <div className='shipping-item-cart'>
                    <div className='shipping-item-text'>
                        <h2 className='shipping-item-h2'>Summary</h2>
                        <ul>
                            <li className='shipping-item-li'>
                                <span className='shipping-item-span-1'>
                                    Amount:
                                </span>
                                <span className=''>
                                    $343
                                </span>
                            </li>
                            <li className='shipping-item-li'>
                                <span className='shipping-item-span-1'>
                                    Est TAX:
                                </span>
                                <span className=''>
                                    $34
                                </span>
                            </li>
                            <hr className='shipping-item-hr'/>
                            <li className='shipping-item-li'>
                                <span className='shipping-item-span-1'>
                                    Total Amount:
                                </span>
                                <span className='shipping-item-span-2'>
                                    $343
                                </span>
                            </li>
                            <hr className='shipping-item-hr'/>
                        </ul>
                        <h2 className='shipping-item-h2'>Items in cart</h2>
                        <div className='shipping-item-div'>
                            <div>
                                <img src={image} className='shipping-item-img' alt="Title" width={50} height={50} />
                                {/* <span className='shipping-item-img-span'>3</span> */}
                            </div>
                            <div>
                                <p>product name</p>
                                <p>Total: $34</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;