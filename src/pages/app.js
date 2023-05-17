
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar"
import About from "./about"
import Portfolio from "./portfolio"
import Contact from "./contact"
import Home from "./Home"



function App() {
  return (
     
      <Router> 
        <Navbar className="nav"/>
        <Routes>
        
        
        
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} /> 
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Contact' element={<Contact/>} />
            
        
      
    </Routes>  
    </Router>
  );
}

export default App;