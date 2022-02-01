import './loginView.css';
import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {submitStyle,Field} from './loginViewStyle';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Start from './Start/Start';
import Demo from './Demo/Demo';
import Footer from './Footer/Footer';




const LoginView = () =>{  
  let navigate = useNavigate();  
    const [loginColor, setLoginColor] = useState("aqua");  
    const [badLogin, setBadLogin] = useState("");  
    const [usernameNow, setusernameNow] =useState("");  
   
  const formStyle = {
      margin: 'auto',
      padding: '110px',
      border: '2px solid',
      borderColor:loginColor,
      borderRadius: '100%',
      background: "#282c35",
      width: '245px', 
      display: 'block'
  };


  const Form = ({onSubmit}) => {
     
      const usernameRef = React.useRef();
      const passwordRef = React.useRef();
      const handleSubmit = e => {
          e.preventDefault();
          const data = {
              username: usernameRef.current.value,
              password: passwordRef.current.value
          };
          onSubmit(data);
      };
      return (
        <form style={formStyle}  onSubmit={handleSubmit} >         
          <div className='badLogin'>{badLogin}</div>
          <Field ref={usernameRef} label="Username:" type="text" />
          <Field ref={passwordRef} label="Login:" type="password" />        
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
            for(let i=0; i<test.length;i++){
              if(test[i].name==data.username && test[i].login==data.password){
                alert("udało się zalogować");   
                out = 1;                 
              }
            }
            if(out==0){
              setLoginColor("red");
              setBadLogin("Zły login");          
            }
            else{                       
              navigate("/Grafik",{state:{name:data.username}});   
              setusernameNow(data.username);        
            }                                                             
        });
    };
    
  return (
    <div>
       <Navbar/>
       <Header/>
       <Start/>
       <Demo/>
       <Footer/>
        { /*   
        <Form onSubmit={handleSubmit} />    
        <div name={usernameNow}></div>
        */}
    </div>
  );
}

export default LoginView;

