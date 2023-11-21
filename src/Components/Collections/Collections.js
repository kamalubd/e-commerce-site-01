import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Collections.css'
import Sidebar from '../Sidebar/Sidebar';

const Collections = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);  //State to get data from event handler

    useEffect ( () => {
        fetch ('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    }
        , [])

        const addToCartBtnClick = (product) => {
            const newCart = [...cart, product];
            setCart(newCart)
        }

        
    return (
        <div className='products-page'>
            <div className='products'>
            {
                products.map(product => <Product product ={product} key ={product.id} eventHandler = {addToCartBtnClick}></Product>)
            }
            </div>
            <div className='sidebar'>
            <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Collections;