import React from 'react';
import './Header.css'
import SubHeading from './SubHeading';
import photo from '../../../assets/photo.png';

function Header() {
  return <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper_info'>
          <SubHeading/>
          <h1 className='app__header-h1'><text style={{fontSize:"55px"}}>S</text>twórz swój własny <text style={{fontSize:"55px"}}>GRAFIK </text> 
           online, dodawaj pracowników i miej wszystko w jednym miejsu...!</h1>
      </div>
      <fiv className='app__wrapper_img'>
          <img src={photo}/>
      </fiv>
  </div>;
}

export default Header;
