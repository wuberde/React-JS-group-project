import React from "react";
import Card from "./components/Card";
import "./css/App.css";
import './css/pei.css';
import NotFound from "./components/NotFound";



export default function App ({data, addToCart, cart} ) {
  
    const datas = data.map((bier) => (<Card
    key={bier.id}
    id={bier.id}
    name={bier.name}
    color={bier.color}
    country={bier.country}
    price={bier.price}
    img_url={bier.image_url}
    addToCart={addToCart}
  /> ))
    
    return (
      <>
          
          <div className="products_wrapper">
          {datas}
          </div>

      </>
    )
  }