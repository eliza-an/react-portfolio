
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
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