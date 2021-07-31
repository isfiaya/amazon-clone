import React from "react";
import "./Product.scss";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this a basket :", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        rating: rating,
        title: title,
        image: image,
        price: price,
        id: id,
      },
    });
  };

  return (
    <div className="product">
      <p>{title}</p>
      <p>
        <span>$</span> {price}
      </p>
      <div className="stars">
        {[...Array(rating)].map((x, i) => (
          <StarIcon className="star__product" key={i} />
        ))}
      </div>

      <img src={image} alt="imgbooks" className="product__image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
