import React, { useState } from "react";
import "./SignIn.scss";
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => history.push('/'))
      .catch(error => alert(error.message))
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        history.push('/')
      })
      .catch(error => alert(error.message))
  };

  return (
    <div className="signIn__wrapper">
      <Link to="/">
        <img src={logo} alt="logo" className="signin__logo" />
      </Link>

      <div className="signIn">
        <h1>Sign In</h1>
        <form action="">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas, molestiae.
        </p>
        <button className="signin__createAccount" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
