import React from "react";
import './ShopPage1.css'
import Shop from '../shopArea/Shop';



function ShopPage1(props) {
    const {Data, onAdd} = props;
    console.log(Data)
    return(
        <div className="shopContaier">
            {Data.productData.map((product) => {
                return(
                    <Shop key={product.id} product={product} onAdd={onAdd} />
                )
            })}
        </div>
    )
}

export default ShopPage1;