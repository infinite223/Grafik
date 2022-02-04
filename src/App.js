
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grafik from "./Components/Grafik/Grafik";
import MainPage from "./Components/MainPage/MainPage";


function App() {
  return (
    <Router>  
      <Routes>      
        <Route path="/" element={<MainPage/>} />   
        <Route path="/Grafik" element={<Grafik user="Dawid"/>} />           
      </Routes>     
    </Router>
  );
}
  
export default App;
