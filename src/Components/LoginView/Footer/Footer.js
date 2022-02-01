import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
  <div className='app__footer'>
      <div className='app__footer-main'>
        <div className='app__footer-contact'>
            <h3>Kontakt:</h3>
        </div>
        <div className='app__footer-help'>
             <h3>Pomoc:</h3>
        </div>
      </div>
       <div className='app__footer-cr'>
           <text>Designed by :  Dawid Szmigiel</text>
           <text>Copyright © -2022  All Rights Reserved.</text>
           <text>Updates and new additions are coming...</text>
       </div>
  </div>
  )
}

export default Footer;
