import './Product.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Product() {
    return(
        <div className='btnContainer'>
            <Link to='/'>
                <button>1</button>
            </Link>
            <Link to='/page2'>
                <button>2</button>
            </Link>
        </div>
    )
}

export default Product;