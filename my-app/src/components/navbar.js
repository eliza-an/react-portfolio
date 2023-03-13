import {  Link } from "react-router-dom";
import React from 'react';
let navBar= () =>{
  return (
  <header>
    <ul>
        <li>
        <Link to="../pages/about">About</Link>
        </li>
        <li>
        <Link to="../pages/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link to="../pages/contact">Contact</Link>
        </li>
    </ul>
  </header>
  );
}
export default navBar;