import React from "react";
import "./Order.scss";
import moment from "moment";
import ItemInBasket from "./ItemInBasket";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM DO YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((el) => (
        <ItemInBasket
          image={el.image}
          title={el.title}
          price={el.price}
          rating={el.rating}
          id={el.id}
          hideBtn
        />
      ))}
      <h3 className="order__total">
        Order Total:<strong>${order.data.amount / 100}</strong>
      </h3>
    </div>
  );
}

export default Order;
