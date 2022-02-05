import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {submitStyle,Field} from '../loginViewStyle';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdImageSearch, MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css'
import myLogo from '../../../assets/photo_2.png';

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const [toggleLogin,setToggleLogin] = useState(false);
    ////////////////////////////////
    let navigate = useNavigate();  
    const [loginColor, setLoginColor] = useState("aqua");  
    const [badLogin, setBadLogin] = useState("");  
    const [usernameNow, setusernameNow] =useState("");  
   
  const formStyle = {
      margin: 'auto',
      padding: '20px',
      background: "black",
      width: '245px', 
      display: 'block',
      color:"white"
  };


  const Form = ({onSubmit}) => {
     
      const usernameRef = React.useRef();
      const passwordRef = React.useRef();
      const passwordGroupRef = React.useRef();
      const handleSubmit = e => {
          e.preventDefault();
          const data = {
              username: usernameRef.current.value,
              password: passwordRef.current.value,
              passwordGroup: passwordGroupRef.current.value
          };
          onSubmit(data);
      };
      return (
        <form style={formStyle}  onSubmit={handleSubmit} >         
          <div className='badLogin'>{badLogin}</div>
          <Field ref={usernameRef} label="Username:" type="text" />
          <Field ref={passwordRef} label="Login:" type="password" />    
          <Field ref={passwordGroupRef} label="Hasło do grupy:" type="password" />      
          <div>
            <button style={submitStyle} type="submit">Zaloguj</button>
          </div>
        </form>
      );
  };


    const handleSubmit = data => {                
        Axios.get('http://localhost:3001/api/get').then(results => {      
          return results.data;       
        }).then(res => {
          let arr = res;
          let test = [];
            arr.map((item)=> {
                test.push(item);
            });
            let out = 0;
            console.log(test)
              for(let i=0; i<test.length;i++){
                if(test[i].name===data.username && test[i].login===data.password && test[i].password===data.passwordGroup){
                  alert("udało się zalogować");   
                  out = 1;                 
                }
              }
              if(out===0){
                setLoginColor("red");
                setBadLogin("Zły login");          
              }
              else{                       
                navigate("/Grafik",{state:{name:data.username}});   
                setusernameNow(data.username);        
              }                                                             
          });
      };
    ////////////////////////////////
    return (
        <nav className='app__navbar'>
            <div className='app_navbar-logo'>
                <img src={myLogo} alt='Logo grafik'/>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>How to start?</a></li>
                <li className='p__opensans'><a href='#demo'>Demo</a></li>
                <li className='p__opensans'><a href='#Contact'>Contact and  help</a></li>
            </ul>
            <div className='app__navbar-login' onClick={()=>setToggleLogin(true)}>
                <a href='#Login' className='p__opensans'><text className="app__navbar-login-color">L</text>og In</a>
            </div>
            {toggleLogin &&
              <div className='app__login-view'>
                  <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>{setToggleLogin(false);setBadLogin("")}}/>
                  <div className='app__login-view-h1'>
                    Zaloguj się do swojego grafiku podając nazwe użytkownika i login
                    <hr style={{height:"3px",color:"var( --color-base)",border:"0px",backgroundColor:"var( --color-base)"}}/>
                    <p style={{fontSize:"14px"}}>Jeśli występuje błąd logowania zgłoś się do twórcy grupy lub administratora strony.</p>
                  </div>
                  <div className='app__login-view-form'>
                     <Form onSubmit={handleSubmit} />   
                  </div> 
                 <div name={usernameNow}></div>
              </div>
            }
          
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
