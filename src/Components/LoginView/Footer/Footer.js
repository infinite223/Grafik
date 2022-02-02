import React from 'react';
import './Footer.css'
import photoFooter from '../../../assets/footer.jpg';
import {MdOutgoingMail} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
  <div className='app__footer'>
      <div className='app__footer-main'>
        <div className='app__footer-contact'>
            <h3>Kontakt:</h3>
            <div className='app__footer-contact-s'>
              <p>
                <MdOutgoingMail size={30} color='var( --color-base)'/>
                <text style={{marginLeft:"15px"}}>dawidszmigiel9@gmail.com</text>
              </p>
              <p>
                <FaFacebookSquare size={27} />
                <a href="https://www.facebook.com/dawid.szmigiel.75" style={{marginLeft:"15px"}}>Dawid Szmigiel</a>
              </p>
              <p>
                <BsGithub size={27} />
                <a href="https://github.com/infinite223" style={{marginLeft:"15px"}}>infinite223 (Github)</a>
              </p>
            </div>
        </div>
        <div className='app__footer-help'>
             <h3>Pomoc:</h3>
             <p>
              Jeśli masz jakieś problemy z działaniem aplikacji, napisz wiadomość do administratora strony na email : 
              <b> dawidszmigiel9@gmail.com</b>
             </p>
             <p>
               Gdy występuje problem z doublowaniem się danych w danym dniu to wystarczy odświeżyć strone
             </p>
             <p>
               Strona może nie działać idealnie na starszych urządzeniach mobilnych 
             </p>
        </div>
      </div>
       <div className='app__footer-cr'>
         <img src={photoFooter} alt="fhotoFooter"/>
           <text>Designed by :  Dawid Szmigiel</text>
           <text>Copyright © -2022  All Rights Reserved.</text>
           <text>Updates and new additions are coming...</text>
         
       </div>
  </div>
  )
}

export default Footer;
