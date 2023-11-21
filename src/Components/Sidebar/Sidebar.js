import React from 'react';
import './Sidebar.css'
// import {addToDb, getShoppingCart} from '../../utilities/fakedb'

const Sidebar = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;

    for (const product of cart){
        
        total += product.price;
        shipping += product.shipping;
    }
     const taxCost = parseInt((total * 0.1).toFixed(2));
     const grandTotal = (total + shipping + taxCost);

    return (
        <div className='sidebar-content'>
            <h2>Order Summry</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total price:${total} </p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax: ${taxCost}</p>
            <p>Grand Total:${grandTotal} </p>
        </div>
    );
};

export default Sidebar;