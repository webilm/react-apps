import React from 'react'
import './ProductDetails.css'
import ProductDetailsMenu from './ProductDetailsMenu/ProductDetailsMenu'

const ProductDetails = () => {
  return (
    <div className='product-details'>
      <section >
        <div className='container product-details-container'>
          <ol>
            <li className=''>
              <a href="/">Breadcrumbs</a>
            </li>
          </ol>
        </div>
      </section>
      <ProductDetailsMenu />
    </div>
  )
}

export default ProductDetails