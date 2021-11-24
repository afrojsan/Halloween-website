import React from 'react'
import './Cart.css'

function Cart(props) {
    const {cartItem, onAdd, onRemove} = props;
    const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);


    return (
        <div className='cartMain'>
            <div className='empty'>
                {cartItem.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItem.map((item) => {
                return(
                <div key={item.id} className='CartLitsItem'>
                    <div className='listImg'>
                        <img src={item.img} alt={''} />
                    </div>
                    <div className='listName'>{item.name}</div>
                    <div className='listButton'>
                        <button onClick={() => onAdd(item)}>+</button>
                        <button onClick={() => onRemove(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>  
                )
            })}
            {cartItem.length !== 0 && (
                <div className='listPrice'>
                    Total Items Price : ${itemsPrice.toFixed(2)}
                </div>
            )}
        </div>
    )
}

export default Cart;

