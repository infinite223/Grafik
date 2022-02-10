import './Grafik.css';
import NowDate from './NowDate/NowDate';
import OneDay  from './OneDay/OneDay';
import {useLocation} from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import myLogo from '../../assets/photo_2.png';
import Footer from '../MainPage/Footer/Footer'
const daysAllUser = [];
const daysAllUserGroup = [];
//get data from db
Axios.get('https://grafik-users.herokuapp.com/api/selectDays').then((response)=>{  
  console.log(response.data)   
  for(var i in response.data)
  daysAllUser.push([i, response.data[i]]);
})  

//main function
 function Grafik() {  
    const d = new Date();
      function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
      }
      const getNameDay = (day) =>{
        let nameDay = "";
        const days = [" Niedziela"," Poniedziałek", " Wtorek", " Środa", " Czwartek", " Piątek", " Sobota"];
          var dayInMonth = new Date(`February ${day}, 2022 23:15:00`);
          nameDay=days[dayInMonth.getDay()];
          
        console.log("aaaa")
        return (<>{nameDay}</>);
      }
      const location = useLocation();
      const Days = daysInMonth(d.getMonth()+1,2022);
      const daysUser = [null];
      const nameGroup = location.state.nameGroup;
      
      useEffect(() => {
        for(var i in daysAllUser){
          if(daysAllUser[i][1].user===location.state.name && daysAllUser[i][1].nameGroup===nameGroup){
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
            Axios.post('https://grafik-users.herokuapp.com/api/insertDay',{
              days:JSON.stringify(daysUser),         
              name:location.state.name
              }).then(()=>{
              alert("grafik zaaktualizowany");
            });                
      }
    return (
      <div className="App__grafik">
        <div className='app__grafik-main'>
          <div className='app__grafik-menu'>
            <img src={myLogo} alt='Logo grafik'/>
            <div className='app__grafik-menu-h1'>
              <h1>Grupa: {nameGroup}</h1>
              <hr style={{float:"left",width:"100%",height:"1px",color:"grey",border:"0px",backgroundColor:"grey"}}/>
              <NowDate/>
              Nie zapomnij zapisać zmian wprowadzonych w grafiku!
            </div>
          </div>
          <div className='app__grafik-calendar'>
            <div className='app__grafik-calendar-h1'>
              Zalogowano jako: <text style={{color:"var( --color-base)"}}>{location.state.name}</text>          
            </div>  
            <div className='app__grafik-calendar-main'>
              <div className='app__grafik-calendar-days'>
                  {Array(Days).fill().map((x, i) => <OneDay
                    key={i}
                    yName={location.state.name} 
                    NowDay={i+1}
                    adddays={(x)=>handleAddClic(x)}
                    deletedays={(x)=>handleRemoveClick(x)}  
                    nowDays={daysAllUser}  
                    nameGroup={nameGroup}   
                  
                    nameDay={()=>getNameDay(i+1)}        
                    />    
                  )}                          
              </div>
              <div className="app__grafik-calendar-save">
                <button className='app__grafik-calendar-button' onClick={saveData}>Zapisz / Aktualizuj</button> 
              </div>
            </div>
          </div>    
        </div>   
        <Footer/>             
      </div>
    );
}

export default Grafik;

