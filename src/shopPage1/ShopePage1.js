import React from "react";
import './ShopPage1.css'
import Shop from '../shopArea/Shop';
import eye from '../img/eye.png';
import knife from '../img/knife.png';
import pumpkin from '../img/pumpkin.png';
import book from '../img/book.png';


function ShopPage1() {
    return(
        <div className="shopContaier">
            <Shop img={eye} name= "Eye" price= "$69.9"/> 
            <Shop img={knife} name= "Knife" price= "$79.9"/> 
            <Shop img={pumpkin} name= "Pumpkin" price= "$69.9"/> 
            <Shop img={book} name= "Book" price= "$59.9"/> 
        </div>
    )
}

export default ShopPage1;