
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grafik from "./Components/Grafik/Grafik";
import LoginView from "./Components/LoginView/loginView";


function App() {
  return (
    <Router>  
      <Routes>      
        <Route path="/" element={<LoginView/>} />   
        <Route path="/Grafik" element={<Grafik user="Dawid"/>} />           
      </Routes>     
    </Router>
  );
}
  
export default App;
