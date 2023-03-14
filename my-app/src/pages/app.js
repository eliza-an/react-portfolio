
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "../components/navbar"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

function App() {
  return (
    <Router>
        <Routes>
        
          
            <Route path='/' element={<Navbar />} /> 
            <Route path='/' element={<About/>} /> 
            <Route path='/' element={<Portfolio/>} />
            <Route path='/' element={<Contact/>} />
            
        
      
    </Routes>  
    </Router>
  );
}

export default App;