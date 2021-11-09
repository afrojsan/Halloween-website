import './Shop.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Shop(props) {

    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    };

    function subtract() {
        if(count > 0){
            setCount(count - 1)
        }
    };

    

    return(
        <div className="productContainer" id='productContainer'>
            <div className="imgContainer">
                <img src={props.img} alt="" ></img>
            </div>
            <p className='name'>{props.name}</p>
            <p className='price'>{props.price}</p>
            <div className="productButton">
                <button onClick={subtract}>-</button>
                <p>{count}</p>
                <button onClick={add}>+</button>
            </div>
                <FontAwesomeIcon className='cart' icon={faShoppingCart}></FontAwesomeIcon>
        </div>
    )
}

export default Shop;