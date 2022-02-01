import React from 'react';
import './Start.css'
import bgPhoto from '../../../assets/appStart-BG.png';
const Start = () => {
  return (
    <div className='app__start' style={{backgroundImage: "url(" +  bgPhoto  + ")"}}>
        <div className='app__start-h1'>
            <p><text style={{color:'aqua',fontSize:"80px"}}>T</text>o nic trudnego!</p> Nrzędzie to pozwoli Ci w łatwy sposób zapisaywać się w dni w
             których chcesz być w pracy, jednocześnie reszta pracowników będzie mogła wiedzieć wolne jaki i zajęte dni.
             <p>Utwórz swój grafik klikając poniższy przycisk aby twoi pracownicy mogli się cieszyć wygodą.</p>
            </div>
        <div className='app__start-button'>
            <button>Utwórz</button>
        </div>
     </div>
  )
}

export default Start;
