import React, { useState } from 'react';
import image from './HomeImg/reactloge.png'
import './homepage.css';
import HomeMain from './HomeMain/HomeMain';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = () => {
    console.log("Kiritilgan matn ", inputValue);
  }


  return (
    <div className="home">
      <header className='homepage container'>
        <div className="home-container">
          <div className='header-item'>
            <img className='header-img-item' src={image} alt="" width="60px" height="60px"/>
            <form className='header-list'>
              <input className='header-input-item' type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter yuo keyword' />
              <button className='header-item-button' onClick={handleSubmit}>Search</button>
            </form>
          </div>
          <div className='header-item-link'>
              <a className='header-item-span' href="/cart">
                  Cart (0)
              </a>
              <a className='header-item-span' href="/login">
                  Sign in
              </a>
              <a href="/profile">
                <img className='home-page-img' src={image} alt="" width="40px" height="40px" />
              </a>
              <div>
                  <p className='header-text header-text-name'><a href="/profile">Mahmud</a></p>
                  <p className='header-text'><a href="/profile">mahmud@gmail.com</a></p>
              </div>
          </div>
        </div>
        <hr />
      </header>
      <HomeMain />
    </div>
  );
};

export default HomePage;