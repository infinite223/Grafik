import React, { useState, useEffect } from 'react';
import './OneDay.css';


function OneDay(props){
    const [worker, setWorker] = useState([null]);   
    const[color, setColor] = useState('OneDayBox');  
    
    useEffect(() => {
      for(var i in props.nowDays){
        const daysUser = [null];
        const arr = props.nowDays[i][1].days.substr(1,props.nowDays[i][1].days.length-2).split(",")//dziwaczne ale działa dobrze 
        for(var j in arr){
          if(props.nowDays[i][1].nameGroup===props.nameGroup){daysUser.push(j, parseInt(arr[j],10));}
        }
        
        if(daysUser.find(element => element === props.NowDay)){
           setWorker(worker=>[...worker,props.nowDays[i][1].user]);                                  
            if(props.nowDays[i][1].user===props.yName){
              setColor('OneDayBoxActive'); 
            }
        }      
     }    
    }, []);

    function ChengeApply(){              
          if(color==="OneDayBoxActive"){    
            setWorker(worker.filter((e)=>(e !== props.yName)));                  
            setColor('OneDayBox');
            props.deletedays(props.NowDay);                                
          }
          else{                    
            setWorker([...worker,props.yName]);                                               
            props.adddays(props.NowDay);    
            setColor('OneDayBoxActive');                                              
          }                       
    } 

    return (    
          <div className={color} onClick={(x)=>ChengeApply()}>          
            {props.NowDay}  
            <div className='Names'>
              {worker.map((user,i)=>(
                <div key={i}>{user}</div>
              ))}
            </div>  
          </div>      
    );  
  }



  
  export default OneDay;