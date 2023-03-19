import React from 'react';
import "./portfolio.css"



const Portfolio= () =>{
  return (
    <div>
      <h3 className='title'>Portfolio</h3>
      <div className='firstCard'>
        <h2 className='cardtitle'>RSE Delivered</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer.jpg"></img></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>
    </div>
  );
}
export default Portfolio;

