import './MainPage.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Start from './Start/Start';
import Demo from './Demo/Demo';
import Footer from './Footer/Footer';


const MainPage = () =>{  
  return (
    <div>
       <Navbar/>
       <Header/>
       <Start/>
       <Demo/>
       <Footer/>
    </div>
  );
}

export default MainPage;

