import './Grafik.css';
import NowDate from './NowDate/NowDate';
import OneDay  from './OneDay/OneDay';
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import Axios from 'axios';

const daysAllUser = [];
//get data from db
Axios.get('http://localhost:3001/api/selectDays').then((response)=>{     
  for(var i in response.data)
    daysAllUser.push([i, response.data[i]]);  
})  

//main function
 function Grafik() {  
  const location = useLocation();
  const Days = 31;//trzeba tu jeszcze zajebać funkcje (ile dni w danym miechu)
  const daysUser = [null];
  
  useEffect(() => {
    for(var i in daysAllUser){
      if(daysAllUser[i][1].user===location.state.name){
        const arr = daysAllUser[i][1].days.substr(1,daysAllUser[i][1].days.length-2).split(",");
        for(var j in arr)
        daysUser.push(j, parseInt(arr[j],10)); 
      }
    } 
  }, []); 

   //add day to arrow
    const handleAddClic = (x) => {
    daysUser.push(x);
      console.log(daysUser);
    };
    //delete day fron arrow
    const handleRemoveClick = (x) => {
      daysUser.pop(x);
    };
    //save all data in DB
    const saveData = () =>{
          Axios.post('http://localhost:3001/api/insertDay',{
            days:JSON.stringify(daysUser),         
            name:location.state.name
            }).then(()=>{
            alert("grafik zaaktualizowany");
          });                
    }
  return (
    <div className="App">
      <header className="App-header"> 
        <div className='Header'>    
            <div className='Name'>{location.state.name}</div>               
            <NowDate/>
        </div>    
        <div className="Name-Web"> 
          Twój grafik
          <div className='Calendar'>
          <div>
              {Array(Days).fill().map((x, i) => <OneDay
                key={i}
                yName={location.state.name} 
                NowDay={i+1}
                adddays={(x)=>handleAddClic(x)}
                deletedays={(x)=>handleRemoveClick(x)}  
                nowDays={daysAllUser}              
                />    
              )}
            </div>                           
          </div>
        </div>   
        <div>
          <button className='saveButton' onClick={saveData}>Zapisz / Aktualizuj</button>   
        </div>           
      </header>        
    </div>
  );
}

export default Grafik;

