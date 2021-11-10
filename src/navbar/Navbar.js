import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom'



function Navbar() {

    function show() {
        document.querySelector('.userFunction').classList.toggle('open');
        document.querySelector('.userFunction').style.transition = 'transform 0.5s ease-in';
        document.querySelector('.bars').style.display = 'none'
        document.querySelector('.times').style.display = 'block'
    };
    function off() {
        document.querySelector('.userFunction').classList.toggle('open');
        document.querySelector('.userFunction').style.transition = 'transform 0.5s ease-in';
        document.querySelector('.bars').style.display = 'block'
        document.querySelector('.times').style.display = 'none'
    };


    return(
        <div className='navbar'>
            <div className='logo'>
                <Link to='/' className='logo'>
                        <FontAwesomeIcon icon={faGhost} className='ghost'></FontAwesomeIcon>
                    <p className='logoText'>Halloween</p>
                </Link>
            </div>
            <div className='userFunction'>
                <Link to='/login'>
                    <FontAwesomeIcon icon={faUser} className='user'></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon icon={faCartArrowDown} className='cartArrowDown'></FontAwesomeIcon>
            </div>
            <div className='mobileUserFunction'>
                <FontAwesomeIcon icon={faBars} className='bars' onClick={show}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={off} icon={faTimes} className='times' ></FontAwesomeIcon>
            </div>
        </div>
    );
}

export default Navbar;