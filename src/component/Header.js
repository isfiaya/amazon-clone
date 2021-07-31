import React from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="search">
        <input type="text" />
        <i className="uil uil-search"></i>
      </div>
      <div className="links">
        <div className="links__children">
          <div>
            <p className="up">Hello</p>
            <Link to="/login">
              <p className="down">Sign up</p>
            </Link>
          </div>
          <div>
            <p className="up">Returns</p>
            <p className="down">& Orders</p>
          </div>
          <div>
            <p className="up">Your</p>
            <p className="down">Prime</p>
          </div>
        </div>
        <div className="cart">
          <Link to="/checkout">
            <i className="uil uil-shopping-cart-alt"></i>
          </Link>

          <span>{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
