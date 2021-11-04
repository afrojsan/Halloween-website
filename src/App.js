import Navbar from './navbar/Navbar';
import Title from './title/Title';
import Shop from './shopArea/Shop';
import Banner from './banner/Banner';
import './App.css';

import eye from './img/eye.png';
import knife from './img/knife.png';
import pumpkin from './img/pumpkin.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Banner />
      <div className="shopContaier">
        <Shop img={eye} name= "eye" price= "$69.9"/> 
        <Shop img={knife} name= "hi" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
      </div>
    </div>
  );
}

export default App;
