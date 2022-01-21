import React, { useState, useEffect } from 'react';
import './OneDay.css';
import Axios from 'axios';


function OneDay(props){
    const [worker, setWorker] = useState("");
    const[color, setColor] = useState('OneDayBox');  
    const [thisDay, setThisDay] = useState();
    function ChengeApply(){               
          if(worker){
            setWorker("");                     
            setColor('OneDayBox');
            //props.deletedays(props.NowDay);                 
          }
          else{                 
            setWorker(props.yName);
            setColor('OneDayBoxActive');                  
            props.adddays(props.NowDay);          
          }                       
    } 

    return (    
          <div className={color}  onClick={(x)=>ChengeApply()}>
            {props.NowDay}  
            <div className='Names'>{worker}</div>  
          </div>      
    );  
  }



  
  export default OneDay;