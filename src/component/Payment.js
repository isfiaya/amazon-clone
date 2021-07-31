import React from "react";
import { Link } from "react-router-dom";
import ItemInBasket from "./ItemInBasket";
import "./Payment.scss";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link>{basket?.length} itmes</Link> )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivrey Address</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>123 react land</p>
            <p>Los angeles,CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
