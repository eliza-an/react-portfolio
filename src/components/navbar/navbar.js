
import React from 'react';
import "./style.css"
import { useTheme } from '@material-ui/core/styles';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  AppBar,
  Toolbar,
  CssBaseline,
Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";



library.add(faBars) 

   
 



let Navbar= () =>{
   const theme = useTheme(); 
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (

   <AppBar position="static">
      <CssBaseline />
      <Toolbar>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          
      <div className="nav">
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
  </div>
  ) }  
    </Toolbar> 
        </AppBar>
  );
}
export default Navbar;