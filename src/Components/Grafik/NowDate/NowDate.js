import React, { useState, useEffect } from 'react';
import './NowDate.css';

const NowDate = () => {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
          <p className="DateStyle">Aktualna data i czas:<br />          
              {new Date().toLocaleDateString()}
              <a className='Better-View'>{new Date().toLocaleTimeString()}</a>
            </p>
        </div>
    );  
  }

  export default NowDate;