import Navbar from './navbar/Navbar';
import Title from './title/Title';
import Shop from './shopArea/Shop';
import Banner from './banner/Banner';
import './App.css';

import eye from './img/eye.png';
import knife from './img/knife.png';
import pumpkin from './img/pumpkin.png';


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
      <Navbar />
      <Title />
      <Banner />
      <div className="shopContaier">
        <Shop img={eye} name= "Eye" price= "$69.9"/> 
        <Shop img={knife} name= "Knife" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
        <Shop img={pumpkin} name= "hi" price= "$24"/> 
      </div>
    </div>
  );
}

export default App;
