import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdImageSearch, MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css'
import myLogo from '../../../assets/logo.png';

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app_navbar-logo'>
                <img src={myLogo} alt='Logo grafik'/>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>How to start?</a></li>
                <li className='p__opensans'><a href='#Demo'>Demo</a></li>
                <li className='p__opensans'><a href='#Contact'>Contact and  help</a></li>
            </ul>
            <div className='app__navbar-login'>
                <a href='#Login' className='p__opensans'><text className="app__navbar-login-color">L</text>og In</a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>
                {toggleMenu &&(
                <div className='app_navbar-smallscreen-overlay flex__center slide-bottom'>
                    <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
                    <ul className='app__navbar-smallscreen-links'>
                        <li className='p__opensans'><a href='#home'>How to start?</a></li>
                        <li className='p__opensans'><a href='#Demo'>Demo</a></li>
                        <li className='p__opensans'><a href='#Contact'>Contact and  help</a></li>
                    </ul>
                </div>
                )}  
            </div>
        </nav>
    )
 };

export default Navbar; 
