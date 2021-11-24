import './Footer.css'
import footerGhost from '../img/moon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


import React from 'react';
import { Link } from 'react-router-dom';




function Footer() {
    return(
        <div className='footerContaier'>
            <div className='footerConent'>
                <div className='img'>
                    <img src={footerGhost} alt=''></img>
                </div>
                <div className='footerTextContainer'>
                    <Link to='/customerservice' style={{ textDecoration: 'none' }}>
                        <p>Customer service</p>
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <p>About us</p>
                    </Link>
                    <div className='footerContact'>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faFacebookSquare} className='footerContactIcon'></FontAwesomeIcon>
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} className='footerContactIcon'></FontAwesomeIcon>
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faTwitter} className='footerContactIcon'></FontAwesomeIcon>
                        </a>
                    </div>

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