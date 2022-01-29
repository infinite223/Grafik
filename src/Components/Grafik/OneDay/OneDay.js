import React, { useState, useEffect } from 'react';
import './OneDay.css';


function OneDay(props){
    const [worker, setWorker] = useState("");   
    const[color, setColor] = useState('OneDayBox');  
    let users = [null];
    useEffect(() => {
     for(var i in props.nowDays){
       const daysUser = [null];
       const arr = props.nowDays[i][1].day.substr(1,props.nowDays[i][1].day.length-2).split(",")
       for(var j in arr){
        daysUser.push(i, parseInt(arr[j],10));  
       }
        
         if(daysUser.find(element => element === props.NowDay)){
           users.push(props.nowDays[i][1].user+" ")
            setWorker(users);                        
            if(props.nowDays[i][1].user===props.yName){
              setColor('OneDayBoxActive'); 
            }
         } 
     }
    }, []);
    function ChengeApply(){              
          if(color==="OneDayBoxActive"){    
            //setWorker(worker[1]===props.yName?worker[2]:worker[1]);     //daiała ale potem reszta rip
            setWorker(worker.slice(worker.indexOf(props.yName.target, 1)));                      
            setColor('OneDayBox');
            props.deletedays(props.NowDay);                                
          }
          else{   
            console.log(worker)                       
            setWorker([...worker,props.yName]);   
            console.log(worker)                           
            props.adddays(props.NowDay);    
            setColor('OneDayBoxActive');                                              
          }                       
    } 

    return (    
          <div className={color} onClick={(x)=>ChengeApply()}>          
            {props.NowDay}  
            <div className='Names'>
              {worker}
            </div>  
          </div>      
    );  
  }



  
  export default OneDay;