import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className="breadcrumb-container">
      <h1>Product Details</h1>
      <p>
        <a href="#">Home</a> | Product Details
      </p>      

      <div className="product-card">
      <img
        src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg"
        alt="Product"
        className="product-image"
      />
      <div className="product-info">
        <h2>The Rage of Dragons</h2>
        <p className="author">By Evan Winter</p>
        <p className="price">$50.00</p>
        <div className="rating">
          ⭐⭐⭐⭐☆ <span>(120 Reviews)</span>
        </div>
        <div className="buttons">
          <button className="cart-button">Add To Cart</button>
          <button className="share-button">🔗</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Details
