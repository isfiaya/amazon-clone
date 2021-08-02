import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Checkout.scss";
import ItemInBasket from "./ItemInBasket";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h4>Hello {user?.email}</h4>
          <h1>Your Shopping Basket</h1>
        </div>
        {basket.map((el) => (
          <ItemInBasket
            image={el.image}
            title={el.title}
            price={el.price}
            rating={el.rating}
            id={el.id}
          />
        ))}
      </div>
      <div className="checkout__right">
        <h3>
          Subtotal({basket.length} item):
          <strong>${getBasketTotal(basket)}</strong>
        </h3>
        <div className="subtotal__checkbok">
          <input type="checkbox" />
          <p>This order contains a gift</p>
        </div>
        <button onClick={(e) => history.push("/payment")}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
