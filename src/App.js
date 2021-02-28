import React ,{useEffect} from 'react';
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import './App.css';
import Login from './Login.js';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise=loadStripe("pk_test_51HluUCBX7HQ5qiFJZUohPQDA8Gr3H58aHazd4sK8w5ikDM6ZEIsIdjynm0Svob8einrKJ3C4L6tKjKGyw1xVbKJi00czgZzVIQ");

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

  }, [])  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Header/>
          <Home/>
        </Route>
        <Route path="/Payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
