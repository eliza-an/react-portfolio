
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navBar from "../components/navbar"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <navBar />
     
        <Route path='./About' element={<About/>} /> 
        <Route path='./Portfolio' element={<Portfolio/>} />
        <Route path='./Contact' element={<Contact/>} />
        
     
    </Router>
  );
}

export default App;