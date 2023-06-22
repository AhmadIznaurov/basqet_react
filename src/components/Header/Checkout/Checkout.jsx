import React from "react";
import basqet from '../../../assets/icons/shopping-cart-solid.svg';

export const Checkout = ({checkout}) => {
   const filterCheckout = checkout.filter((item) => {
        if(item.bought === true) {
            return item
        }
    })

    return (
        <div className="checkout">
            <img src={basqet} alt="basqet"/>
            <span className="counter">{filterCheckout.length}</span>
        </div>
    );
};