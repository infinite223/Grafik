import React, {useState} from 'react';
import './DemoOneDay.css';

const DemoOneDay=(props)=> {
    const [toggle,setToggle] = useState(false);
  return (    
    <div className={toggle?'app__DemoOneDay-day-active':'app__DemoOneDay-day'} onClick={()=>toggle?setToggle(false):setToggle(true)}>
             {props.NowDay}  
            <div className='app__DemoOneDay-names'>
             {toggle&&
                <p>Tester</p>
             }
            </div>  
    </div>
  )
}


export default DemoOneDay;
