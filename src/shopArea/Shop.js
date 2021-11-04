import './Shop.css';
import React, { useState } from 'react';

function Shop(props) {

    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    return(
        <div>
            <div className="imgContainer">
                <img src={props.img} alt=""></img>
            </div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <div>
                <button onClick={add}>+</button>
                <p>{count}</p>
                <button onClick={subtract}>-</button>
            </div>
            <button></button>
        </div>
    )
}

export default Shop;