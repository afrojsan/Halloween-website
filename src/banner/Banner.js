import './Banner.css';
import banner from '../img/banner.jpg'
import React from 'react';


function Banner() {
    return(
        <div className='banner'>
            <img src={banner} alt=''></img>
        </div>
    )
}

export default Banner;