import React from "react";
import './ShopPage2.css'
import Shop from '../shopArea/Shop';
import boiler from '../img/boiler.png';
import candle from '../img/candle.png';
import hat from '../img/hat.png';
import skull from '../img/skull.png';


function ShopPage2() {
    return(
        <div className="shopContaier">
            <Shop img={candle} name= "candle" price= "$39.9"/> 
            <Shop img={boiler} name= "boiler" price= "$109.9"/> 
            <Shop img={hat} name= "hat" price= "$79.9"/> 
            <Shop img={skull} name= "skull" price= "$59.9"/> 
        </div>
    )
}

export default ShopPage2;