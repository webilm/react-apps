import React, { useState } from 'react'
import image from '../product-details-img/reactloge.png'
import './ProductDetailsMenu.css'

const ProductDetailsMenu = () => {
    const [explanation, setExplanation] = useState('')

    const handleChange = (event) => {
        setExplanation(event.target.value)
    }

    const handleSubmit = () => {
        console.log(explanation);
    }

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });


    return (
        <div className='product-details-menu'>
            <section>
                <div className='container product-menu-container-1'>
                    <div className='product-menu-img'>
                        <img className='product-menu-img-1' src={image} alt="" height={340}/><br />
                        <img className='product-menu-img-2' src={image} alt="" width={60} height={60}/>
                    </div>
                    <div className='product-menu-title'>
                        <h2>Product title</h2>
                        <div>
                            <span className='product-menu-span-1'>⭐⭐⭐⭐⭐  5 </span>
                            <b className='product-menu-span-2'> • </b>
                            <span className='product-menu-span-3'>Verified</span>
                        </div>
                        <p className='product-menu-text-1'>$234</p>
                        <button className='product-menu-button'>Add to Cart</button>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem, ipsum dolor. text ever since the 1500s.</p>
                        <ul>
                            <li>
                                <b>Stock</b>
                            </li>
                            <li>
                                <b>Category:</b>
                                <span className='product-menu-span-4'>Electonics</span>
                            </li>
                            <li>
                                <b>Seller / Brand:</b>
                                <span className='product-menu-span-5'>Apple</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='container product-menu-star'>
                    <hr />
                    <div >
                        <h1 className='product-menu-h1'>Your Review</h1>
                        <h3 className='product-menu-h3'>Rating</h3>
                        <span className='product-menu-span-6'>⭐⭐⭐⭐⭐</span>
                        <p> Comments </p>
                        <textarea value={explanation} onChange={handleChange} rows={5} cols={50} className="product-menu-textarea" placeholder="Matnni kiritgandan so'ng natijasi Konsolda chiqadi" name="description"></textarea>
                        <br />
                        <button className='product-menu-submit' onClick={handleSubmit}>Post Review</button>
                        <hr />
                        <h1 className='product-menu-1-1'>Other Customers Reviews</h1>
                        <div className='product-menu-border'>
                            <div className='product-menu-time'>
                                <img src={image} alt="" width={40} height={40}/>
                                <p className='product-menu-name'>Makhmud<br /> <time className='product-menu-new-date'></time> Posted on: {currentDate}</p>
                            </div>
                            <span className='product-menu-span-1'>⭐⭐⭐⭐⭐  5 </span>
                            <p className='product-menu-end'>This is user review</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductDetailsMenu