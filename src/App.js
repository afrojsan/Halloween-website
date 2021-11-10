import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home'
import Footer from './footer/Footer';
import Login from './login/Login';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />  
      </Router>
  );
}

export default App;
 