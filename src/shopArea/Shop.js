import './Shop.css';
import React from 'react';

function Shop(props) {
    const { onAdd, product } = props;
    return (
        <div className="productContainer" id='productContainer'>
            <div className='product'>
                <div className="imgContainer">
                    <img src={product.img} alt="" ></img>
                </div>
                <p className='name'>{product.name}</p>
                <p className='price'>${product.price}</p>
                <div className="productButton">
                    <button onClick={() => onAdd(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Shop;