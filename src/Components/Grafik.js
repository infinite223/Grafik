import './Grafik.css';
import NowDate from './NowDate';
import OneDay  from './OneDay';
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect } from 'react';


function Grafik(props) {

  const [days, setdays] = useState([]);
 
  const location = useLocation();
  const handleAddClic = (x) => {
    const number = days.length + 1;
    setdays([...days, x]);
    console.log(x);
  };
  const handleRemoveClick = (x) => {
    setdays(days.filter((item, index) => item !== x));
  };

  const AllDays = () => { 
    const Days = 31;
    return (
      <div>
        {Array(Days).fill().map((x, i) => <OneDay
         yName={location.state.name} 
         NowDay={i+1}
         adddays={(x)=>handleAddClic(x)}
         deletedays={(x)=>handleRemoveClick(x)}      
         />    
        )}
      </div>
    );
  }

  const SaveButton = () =>{
    return(
      <div><button className='saveButton'>Zapisz / Aktualizuj</button></div>
    )
  }

  return (
    <div className="App">
    <header className="App-header"> 
      <div className='Header'>    
          <div className='Name'>{location.state.name}</div>               
          <NowDate/>
       </div>    
       <p className="Name-Web"> 
         Twój grafik
        <div className='Calendar'>
           <AllDays/>                           
        </div>
      </p>   
      <SaveButton/>   
      <ul>
              {days.map(item => (
                <li key={item}>{item}</li>
              ))}
          </ul>             
    </header>        
  </div>
  );
}

export default Grafik;
