import React from 'react';


import Title from '../title/Title';
import Banner from '../banner/Banner';
import Product from '../product/Product';
import Banner2 from '../banner2/Banner2';
import ShopPage1 from '../shopPage1/ShopePage1';
import ShopPage2 from '../shopPage2/ShopPage2';
import './Home.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App(props) {
  const {Data, onAdd} = props;
  return (
      <div className="App">
        <Router>
            <Title />
            <Banner />
            <Switch>
                <Route path='/Halloween-website' exact>
                  <ShopPage1 Data={Data} onAdd={onAdd} />
                </Route>
                <Route path='/page2'>
                  <ShopPage2 Data={Data} onAdd={onAdd} />
                </Route>
            </Switch>
            <Product />
            <Banner2 />
        </Router>
      </div>

  );
}

export default App;
