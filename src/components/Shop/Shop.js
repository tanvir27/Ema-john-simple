import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {

    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/2021-ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 50)));
  }, []);

  // handling product
  const handleAddProduct = (product) => {
    const newCart= [...cart , product]
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((p) => (
          <Product handleAddProduct = {handleAddProduct}
          product ={p}></Product>
        ))}
      </div>

      <div className="cart-container">
            <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Shop;
