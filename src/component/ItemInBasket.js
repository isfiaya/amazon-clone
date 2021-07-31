import React from "react";
import "./ItemInBasket.scss";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function ItemInBasket({ image, title, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="item__information">
        <h3 className="item__information__title">{title}</h3>
        <p className="item__information__price">
          <small>$</small>
          {price}
        </p>
        <div className="stars">
          {[...Array(rating)].map((x, i) => (
            <StarIcon className="star__product" key={i} />
          ))}
        </div>
        <button className="item__information__btn" onClick={removeItem}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default ItemInBasket;
