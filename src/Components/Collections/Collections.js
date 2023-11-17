import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Collections.css'

const Collections = () => {

    const [products, setProducts] = useState([]);

    useEffect ( () => {
        fetch ('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    }
        , [])

        
    return (
        <div className='products'>
            {
                products.map(product => <Product product ={product} key ={product.id}></Product>)
            }
        </div>
    );
};

export default Collections;