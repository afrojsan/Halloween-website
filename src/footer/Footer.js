import './Footer.css'
import footerGhost from '../img/moon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import React from 'react';




function Footer() {
    return(
        <div className='footerContaier'>
            <div className='footerConent'>
                <div className='img'>
                    <img src={footerGhost} alt=''></img>
                </div>
                <div className='footerTextContainer'>
                    <p>Customer service</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className='footerPayment'>
                <div>
                    <FontAwesomeIcon className='footerIcon' icon={faCcApplePay}></FontAwesomeIcon>
                    <FontAwesomeIcon className='footerIcon' icon={faCcMastercard}></FontAwesomeIcon>
                    <FontAwesomeIcon className='footerIcon' icon={faCcVisa}></FontAwesomeIcon>
                    <FontAwesomeIcon className='footerIcon' icon={faCcPaypal}></FontAwesomeIcon>
                    <FontAwesomeIcon className='footerIcon' icon={faCcAmex}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default Footer;