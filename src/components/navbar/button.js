
import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from "react";


library.add(faBars) 



export default function Example() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
 
  return (
    <div className={isActive ? "active" : "inactive"}>  
     <h1>Hello Devdojo</h1>
     <button class= "displayicon" onClick={ToggleClass}><FontAwesomeIcon className="icon" icon="fa-solid fa-bars"  size="2x"/></button>
   </div>
  );
}}
