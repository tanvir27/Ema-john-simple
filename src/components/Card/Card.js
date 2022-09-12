import React from 'react';
import './Card.css'

const Card = (props) => {
    const cart = props.cart;
    console.log(cart)
    //total price 
    const totalPrice = cart.reduce( (total, prd) => total + prd.price , 0)

    // let totalPrice = 0;
    // for(let i =0; i< cart.length;i++){
    //     const product = cart[i];
    //     totalPrice = totalPrice + product.price;
    // }

    //shipping charge
   let shipping = 0;
   if(totalPrice > 1000){
    shipping = 100;
   }
  else if(totalPrice > 500){
    shipping = 50;
   }
   else if(totalPrice > 250){
    shipping = 25;
   }
   else if(totalPrice > 100){
    shipping = 15;
   }
   else if(totalPrice > 50){
    shipping = 5;
   }

   const tax = totalPrice / 10;

   const grandTotal = totalPrice + tax + shipping;

   const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
   }

    return (
        <div className='card-section'>
            <h4 className='order-summery'>Order Summery </h4>
            <p>Items Orderd: {cart.length}</p>
            <p>Product Price: ${formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${formatNumber(shipping)}</small></p>
            <p><small>Tax & Vat: ${formatNumber(tax)}</small></p>
            <p className='total-price'>Total Price: ${ formatNumber(grandTotal)}</p>
            <button className='order-button'>Review Your Order</button>
        </div>
    );
};

export default Card;