import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const[displayProducts, setDisplayProducts] = useState([]);

    useEffect(() =>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        });
    },[]);

    useEffect(()=> {
        if(products.length){
            const savedCart =getStoredCart();
            const storeCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product=>product.key ===key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct);
                }
            }
            setCart(storeCart);
        }
    }, [products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    return (
        <div>
        <div className="search-container">
            <input                
            type="text"
            placeholder="search product"
            onChange={handleSearch}/>
        </div>
        <div className='shop-container'>
            <div className="product-container">
                <h3>Product: {products.length}</h3>
                {
                    displayProducts.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;