import React, { useEffect } from 'react'
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import SignIn from "./component/SignIn";
import { auth } from './component/firebase'
import { useStateValue } from './component/StateProvider';
import Payment from './component/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Orders';

const promise = loadStripe(
  'pk_test_51JJOx8GenWTpcYVP7BcObaSPRCoobGghVY79p7HgCSBqMS7jJCrP1ymxf9aH8GNr52kuSJAuHrp6surSrTgKK6qp00mLKqwOT9'
);


function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is >>>', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
