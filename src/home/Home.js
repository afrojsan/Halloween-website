import React from 'react';
import Title from '../title/Title';
import Banner from '../banner/Banner';
import Product from '../product/Product';
import Banner2 from '../banner2/Banner2';
import ShopPage1 from '../shopPage1/ShopePage1';
import ShopPage2 from '../shopPage2/ShopPage2';
import './Home.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
    let resizeTimer;
    window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
    });
  
  return (
      <div className="App">
        <Router>
            <Title />
            <Banner />
            <Switch>
                <Route path='/' exact component={ShopPage1} />
                <Route path='/page2' component={ShopPage2} />
            </Switch>
            <Product />
            <Banner2 />
        </Router>
      </div>

  );
}

export default App;
