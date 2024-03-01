import image from '../HomeImg/reactloge.png'
import './HomeMain.css'

const HomeMain = () => {
    return (
        <div className='container main-container'>
            <div className="main-lift">
                <div  className="main-button-count">
                    <h3>Price ($)</h3>
                    <div className='main-count-input'>
                        <input className='quantity' type="number" placeholder='Min' />
                        <input className='quantity' type="number" placeholder='Max'/>
                        <button className='quantity-button'>Go</button>
                    </div>
                </div>
                <div className='main-filter'>
                    <h3>Category</h3>
                    <ul className='navbar'>
                        <li className='navbar-checkbox'>
                            <input type="checkbox" id='electroniks'/>
                            <label for="electroniks" value='electroniks'>Electroniks</label>
                        </li>
                        <li className='navbar-checkbox'>
                            <input type="checkbox" id='laptops'/>
                            <label for="laptops" value='laptops'>Laptops</label>
                        </li>
                        <li className='navbar-checkbox'>
                            <input type="checkbox" id='toys'/>
                            <label for="toys" value='toys'>Toys</label>
                        </li>
                        <li className='navbar-checkbox'>
                            <input type="checkbox" id='office'/>
                            <label for="office" value='office'>Office</label>
                        </li>
                        <li className='navbar-checkbox'>
                            <input type="checkbox" id='beauty'/>
                            <label for="beauty" value='beauty'>Beauty</label>
                        </li>
                    </ul>
                    <hr />
                    <h3>Ratings</h3>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <label htmlFor="starCheckbox3">
                                ⭐⭐⭐⭐⭐
                            </label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label htmlFor="starCheckbox3">
                                ⭐⭐⭐⭐⭐
                            </label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label htmlFor="starCheckbox3">
                                ⭐⭐⭐⭐⭐
                            </label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label htmlFor="starCheckbox3">
                                ⭐⭐⭐⭐⭐
                            </label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label htmlFor="starCheckbox3">
                                ⭐⭐⭐⭐⭐
                            </label>
                        </li>
                    </ul>
                </div>
            </div> 
            <div className="main-right">
                <img src={image} alt="" width="168px" height="168px"/>
                <div className='main-free'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>
                        ⭐⭐⭐⭐⭐  <b>•</b><span>5</span>
                    </p>
                    
                    <p className='main-item-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className='main-cart'>
                    <span>$989</span>
                    <p>Free Shipping</p>
                    <button className='main-cart-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default HomeMain