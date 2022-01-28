import React, { useState, useEffect } from 'react';
import './OneDay.css';



function OneDay(props){
    const [worker, setWorker] = useState(null);
    
    const[color, setColor] = useState('OneDayBox');  
    const [thisDay, setThisDay] = useState();
    useEffect(() => {
      if(props.nowDays.find(element => element === props.NowDay)){
        setColor('OneDayBoxActive'); 
        setWorker(props.yName);    
        console.log("dzaaaa"); 
      }   
     // console.log("hehe")
    }, [props.updateDays]);

    function ChengeApply(){   
      console.log("dd");           
          if(worker){
            setWorker("");                     
            setColor('OneDayBox');
            props.deletedays(props.NowDay);     
                             
          }
          else{                            
            setWorker(props.yName);                              
            props.adddays(props.NowDay);    
            setColor('OneDayBoxActive');                                            
          }                       
    } 

    return (    
          <div className={color} onClick={(x)=>ChengeApply()}>          
            {props.NowDay}  
            <div className='Names'>{worker}</div>  
          </div>      
    );  
  }



  
  export default OneDay;