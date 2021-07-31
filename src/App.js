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
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
