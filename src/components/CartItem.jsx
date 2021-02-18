import React from 'react'


export default function CartItem({item, removeFromCart}) {
    //console.log(item);

    return (
            <div className="productCard" key={item.id}>
                <div className="img-card">
                    <img src={`${item.image_url}`} alt="bier sort" className="bier-img"/>
                </div>
                <h3 className="bier-name">{item.name}</h3>
                <p className="bier-color">{item.color}</p>
                <p className="bier-country">country: {item.country}
                </p>
                <p className="bier-price"> price: {item.price}</p>
                <button className="shop-cart-btn-dlt" onClick={() => {removeFromCart(item.id)}}>Delete &#x1f6d2;</button>
            </div>
    )
}