import {  Link } from "react-router-dom";
import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from "react";


library.add(faBars) 

  



let Navbar= () =>{
  return (
  <header className="nav">

   
      <Link to= "/" className="myName">Elizaveta Anufrieva</Link>

 



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