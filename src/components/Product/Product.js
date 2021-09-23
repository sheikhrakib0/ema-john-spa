import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, stock, seller} = props.product;
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-details'>
            <h3 className="product-name">{name}</h3>
            <p><small>by: </small>{seller}</p>
            <p>Price: {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button onClick={()=>props.handleAddToCart(props.product)} className="cart-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;