import React from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  const handelAthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
          <Link to={!user && '/login'}>
            <div onClick={handelAthentication}>
              <p className="up">Hello {user ? user.email : "Guest"}</p>
              <p className="down">{user ? "Sign Out" : "Sign in"}</p>
            </div>
          </Link>
          <Link to="orders">
            <div>
              <p className="up">Returns</p>
              <p className="down">& Orders</p>
            </div>
          </Link>
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
