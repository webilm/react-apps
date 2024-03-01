import React from 'react'
import './Cart.css'
import CartComp from './CartComp/CartComp'


const Cart = () => {
    return (
        <div className='cart-body'>
            <div className='container cart-container'>
                <h2 className='cart-h2'>5 Item(s) in Cart</h2>
            </div>
            <CartComp />
        </div>
    )
}

export default Cart