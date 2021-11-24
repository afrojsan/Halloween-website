import halloweenTitleImage from '../img/pumpkin.png';
import './Title.css';
import React from 'react';



function Title() {


    return(
        <div className='title__Container' >
            <div className='titleImg__Container'>
                <img className='titleImg' src={halloweenTitleImage} alt=''/>
            </div>
            <div className='titleText__Container'>
                <div className='titleText'>
                    <span className='title'>trick or treat</span>
                    <span className='titleConect'>let's have some fun</span>
                </div>
                <div className='titleButton__Container'>
                    <a href='#productContainer'>
                        <button className='titleButton'>Shop Now!!</button>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Title;