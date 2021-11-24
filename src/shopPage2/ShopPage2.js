import React from "react";
import './ShopPage2.css'
import Shop from '../shopArea/Shop';


function ShopPage2(props) {
    const {Data, onAdd} = props;
    return(
        <div className="shopContaier">
            {Data.productData2.map((product) => {
                return(
                    <Shop key={product.id} product={product} onAdd={onAdd} />
                )
            })}
        </div>
    )
}

export default ShopPage2;