import React, { useState, useEffect } from "react";
import "./Checkout.scss";
import ItemInBasket from "./ItemInBasket";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";


function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h1>Your Shopping Basket</h1>

        </div>
        {basket.map(el => (
          <ItemInBasket image={el.image} title={el.title} price={el.price} rating={el.rating} id={el.id} />
        ))}

      </div>
      <div className="checkout__right">
        <h3>
          Subtotal({basket.length} item): <strong>${getBasketTotal(basket)}</strong>
        </h3>
        <div className="subtotal__checkbok">
          <input type="checkbox" />
          <p>This order contains a gift</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
