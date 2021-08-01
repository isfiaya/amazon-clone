import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ItemInBasket from "./ItemInBasket";
import "./Payment.scss";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setprocessing(false);
        history.replace("/");
      });
  };
  const handelChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <div className="payment_details">
            <form onSubmit={handelSubmit}>
              <CardElement onChange={handelChange} />
              <div className="payment__priceContainer">
                <h3>
                  order Total: <strong>${getBasketTotal(basket)}</strong>
                </h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
