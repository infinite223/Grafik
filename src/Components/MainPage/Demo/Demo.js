import React from 'react';
import './Demo.css'
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsFillCalendar2DateFill} from 'react-icons/bs'
import { GiFlexibleLamp } from 'react-icons/gi';
import DemoOneDay from './DemoOneDay/DemoOneDay'
const Demo = () => {
  const Days = 31;
  return (
  <div className='app__demo' id="demo"> 
    <div className='app__demo-text'>
        <div className='app__demo-calendar'>
             <BsFillCalendar2DateFill size={65}style={{position:"absolute"}}/>
        </div>
        <div className='app__demo-h1'>
            Tutaj możesz zobaczyć jak wygląda przykładowy grafik. 
            Dodawaj i usuwaj dni w których chcesz być...
           <AiOutlineArrowRight size={100} color='var( --color-base)'/>
        </div>
    </div>
    <div className='app__demo-grafik'>
        <div className='app__demo-grafik-h1'>
            Zalogowano jako: <text style={{color:"var( --color-base)"}}>Tester</text>
        </div>   
        <div className='app__demo-grafik-calendar'>
              <div>
                  {Array(Days).fill().map((x, i) => <DemoOneDay
                    key={i}            
                    NowDay={i+1}                              
                    />    
                  )}
               </div>                           
          </div>
    </div>
  </div>
  )
}

export default Demo;
