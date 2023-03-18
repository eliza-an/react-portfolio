import {  Link } from "react-router-dom";
import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faBars) 



let Navbar= () =>{
  return (
  <header className="nav">
    
  <ul className="toprow">
    <li className="myName">
      <Link to= "/">Elizaveta Anufrieva</Link>
      
    </li>
   <li></li>
</ul>
 
<div className="icondiv">
 <FontAwesomeIcon className="icon" icon="fa-solid fa-bars"  size="2x"/></div>
 
    <ul className="navigation">
        <li className="navbar">
        <Link to="/about">About</Link>
        </li>
        <li className="navbar">
        <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li className="navbar">
        <Link to="/contact/">Contact</Link>
        </li>
    </ul>
  </header>
  );
}
export default Navbar;