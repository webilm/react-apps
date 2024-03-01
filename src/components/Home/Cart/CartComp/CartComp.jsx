import React, { useState } from 'react';
import './CartCamp.css';
import image from '../CartImg/reactloge.png';

const CartComp = () => {
  const [count, setCount] = useState(0); // Add state for count

  const handleIncrement = () => {
    setCount(count + 1); // Increment count
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='container'>
      <div className='container-cart'>
        <div className='cart-menu-base'>
          <div className='cart-menu-img'>
            <img className='cart-menu-images' src={image} alt='' width={70} height={70} />
            <div>
              <p className='cart-menu-p2'>Product name</p>
              <p className='cart-menu-p'>Seller: Apple</p>
            </div>
          </div>
          <div className='cart-menu-count'>
            <div className='cart-menu-inc-decr'>
              <button className='cart-menu-button-count' data-action='decrement' onClick={handleDecrement}>
                <span>−</span>
              </button>
              <input
                className='cart-menu-button-count-1'
                type='number'
                name='custom-input-number'
                readOnly
                value={count}
              />
              <button className='cart-menu-button-count' data-action='increment' onClick={handleIncrement}>
                <span>+</span>
              </button>
            </div>
            <div className='cart-menu-bold'>
              <p className='cart-menu-doll'>$898</p>
              <p className='cart-menu-text'>$98/per/item </p>
            </div>
          </div>
          <div>
            <a className='cart-menu-link' href='/'>Remove</a>
          </div>
        </div>
        <div className='cart-menu-item'>
          <div>
            <ul>
              <li className='cart-menu-li'>
                <p className='cart-menu-text-p'>Total: Price</p>
                <p className='cart-menu-text-p'>$98</p>
              </li>
              <li className='cart-menu-li'>
                <p className='cart-menu-text-p'>Total: Units</p>
                <p className='cart-menu-text-color'>7 (Units)</p>
              </li>
              <li className='cart-menu-li'>
                <p className='cart-menu-text-p'>TAX:</p>
                <p className='cart-menu-text-p'>$78</p>
              </li>
            </ul>
            <hr className='cart-menu-hr'/>
            <div className='cart-menu-li'>
              <p className='cart-menu-text-bold'>Total Price:</p>
              <p className='cart-menu-text-bold'>$898</p>
            </div>
            <button className='cart-menu-button-c'>
              <a href="/cart">Continue</a>
            </button>
            <br/>
            <button className='cart-menu-button-b'> 
              <a href="/">Back to shop</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;