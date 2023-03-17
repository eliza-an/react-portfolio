import {  Link } from "react-router-dom";
import React from 'react';
import "./style.css"

let Navbar= () =>{
  return (
  <header className="nav">
    
  <ul >
    <li className="myName">
      <Link to= "/">Elizaveta Anufrieva</Link>
    </li>
  </ul>



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