import React from 'react'
import CartItem from "./CartItem"



export default function Cart({cart, removeFromCart, sum}) {
console.log(cart);
    const cartItems=cart.map((boughtBier) => 
        <CartItem key={boughtBier.id} item={boughtBier} removeFromCart={removeFromCart} />
)


    return (
        <>
        <div className="txt">
            <h1>Items in cart</h1>
            <h2>Sum of your order: {sum} Euro</h2>
            <div className="products_wrapper">
            {cartItems}
            </div>
        </div>
        </>
    )
}
