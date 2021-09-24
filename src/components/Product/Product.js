import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, price, stock, seller, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-details'>
            <h3 className="product-name">{name}</h3>
            <p><small>by: </small>{seller}</p>
            <p>Price: {price}</p>
            <p><small>only {stock} left in stock - order soon</small></p>
            <Rating
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol = "fas fa-star icon-color"
            readonly
            ></Rating><br />
            <button onClick={()=>props.handleAddToCart(props.product)} className="cart-btn">{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;