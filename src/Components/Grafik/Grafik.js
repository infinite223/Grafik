import './Grafik.css';
import NowDate from './NowDate/NowDate';
import OneDay  from './OneDay/OneDay';
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import Axios from 'axios';

const daysAllUser = [];
const daysUser = [null];

  Axios.get('http://localhost:3001/api/selectDays').then((response)=>{     
    for(var i in response.data)
      daysAllUser.push([i, response.data[i]]);
      const arr = daysAllUser[0][1].day.substr(1,daysAllUser[0][1].day.length-2).split(",");
      for(var i in arr)
      daysUser.push(i, parseInt(arr[i],10));       
  })
 
//main function
 function Grafik() {    
    const location = useLocation();
    const Days = 31;
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
            day:JSON.stringify(daysUser),         
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

