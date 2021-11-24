import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home'
import Footer from './footer/Footer';
import Login from './login/Login';
import Cart from './cart/Cart';
import CustomerService from './customerService/CustomerService';
import About from './aboutus/About';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Data from './productData/Data';


function App() {

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
  
  const [ cartItem, setCartItem ] = useState([]);
  function onAdd(product) {
    const exist = cartItem.find((x) => x.id === product.id);
    if(exist){
      setCartItem(
        cartItem.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    }else {
      setCartItem([...cartItem, {...product, qty: 1}]);
    }
  };

  function onRemove(product) {
    const exist = cartItem.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    }else {
      setCartItem(
        cartItem.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  };

  return (
      <Router>
          <Navbar />
          <Switch>
            <Route path="/Halloween-website/" exact>
              <Home Data={Data} onAdd={onAdd} />
            </Route>
            <Route path="/login" component={Login} />
            <Route path='/customerservice' component={CustomerService} />
            <Route path='/about' component={About} />
            <Route path='/cart'>
              <Cart onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
            </Route>
          </Switch>
          <Footer />  
      </Router>
  );
}

export default App;
 