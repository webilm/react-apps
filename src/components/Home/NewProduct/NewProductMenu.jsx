import React, { useState } from 'react';
import './NewProductMenu.css';

const NewProductMenu = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      setProductInfo(data);
      setIsSubmitted(true);
      alert('Sizning ma\'lumatingiz qabul qilindi');
    } else {
      alert('Siz malumatlarni tuliq kiritmagansiz');
    }
  };

  return (
    <div className='production-menu'>
      <section>
        <h1>Create New Product</h1>
        <form className='production-menu-form' onSubmit={handleSubmit}>
          <div>
            <p className='production-menu-p'>Name</p>
            <input className="production-menu-input" type="text" placeholder="Product name" name="name" required="" />
          </div>
          <div>
            <p className='production-menu-p'>Description</p>
            <textarea className='production-menu-textarea' placeholder="Product description" name="description" required=""></textarea>
          </div>
          <div className='production-menu-brand'>
            <div className='production-menu-card'>
              <p className='production-menu-p'>Price</p>
              <input className='production-menu-input1' type="text" placeholder="0.00" name="price" required="" />
              <p className='production-menu-p'>Seller / Brand</p>
              <input className='production-menu-input1' type="text" placeholder="Seller or brand" name="seller" required="" />
            </div>
            <div className='production-menu-card'>
              <p className='production-menu-p'>Category</p>
              <select className='production-menu-input2' name="category" required="">
                <option value="Electronics">Electronics</option>
                <option value="Cameras">Cameras</option>
                <option value="Laptops">Laptops</option>
                <option value="Accessories">Accessories</option>
                <option value="Headphones">Headphones</option>
                <option value="Sports">Sports</option>
              </select>
              <p className='production-menu-p'>Stock</p>
              <input className='production-menu-input1' type="text" placeholder="0" name="stock" required="" />
            </div>
          </div>
          <button className='production-menu-button' type="submit">Create Product</button>
          {isSubmitted && (
            <div>
              <h2>Entered Information:</h2>
              <p>Name: {productInfo.name}</p>
              <p>Description: {productInfo.description}</p>
              <p>Price: {productInfo.price}</p>
              <p>Seller / Brand: {productInfo.seller}</p>
              <p>Category: {productInfo.category}</p>
              <p>Stock: {productInfo.stock}</p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default NewProductMenu;