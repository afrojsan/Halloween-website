import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

    function show() {
        document.querySelector('.userFunction').style.right = '0%';
        document.querySelector('.bars').style.display = 'none'
        document.querySelector('.times').style.display = 'block'
    }
    function off() {
        document.querySelector('.userFunction').style.right = '-100%';
        document.querySelector('.bars').style.display = 'block'
        document.querySelector('.times').style.display = 'none'
    }



    return(
        <div className='navbar'>
            <div className='logo'>
                <FontAwesomeIcon icon={faGhost} className='ghost'></FontAwesomeIcon>
                <div className='logoText'>Halloween</div>
            </div>
            <div className='userFunction'>
                <FontAwesomeIcon icon={faUser} className='user'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCartArrowDown} className='cartArrowDown'></FontAwesomeIcon>
            </div>
            <div className='mobileUserFunction'>
                <FontAwesomeIcon icon={faBars} className='bars' onClick={show}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTimes} className='times' onClick={off}></FontAwesomeIcon>
            </div>
        </div>
    );
}

export default Navbar;