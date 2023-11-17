import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, ratings, stock, img } = props.product;
    console.log(props)
    return (
        <div className='container'>
            <div className='single-product'>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>price: ${price}</p>
                <p><small>Stock: {stock}</small></p>
                <div className='small-info'>
                    <p><small>Brand: {seller}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                </div>
                <button>Add to Cart</button>
            </div>


        </div>
    );
};

export default Product;