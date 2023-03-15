import {  Link } from "react-router-dom";
import React from 'react';
import "./style.css"

let Navbar= () =>{
  return (
  <header className="nav">
    <ul>
        <li>
        <Link to="/">About</Link>
        </li>
        <li>
        <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
        <Link to="/contact/">Contact</Link>
        </li>
    </ul>
  </header>
  );
}
export default Navbar;