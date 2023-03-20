import React from 'react';
import "./portfolio.css"



const Portfolio= () =>{
  return (
    <div>
      <h3 className='title'>Portfolio</h3>
      <div className='firstCard'>
        <h2 className='cardtitle'>RSE Delivered</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer.jpg"></img></div>
        <p>This website is designed fo the business RSE. It's main purpose is to represent the company and explain the services offered. This page is currently not active, it is simply a template until the cutom domain is ready. The link to the application is <a href="https://eliza-an.github.io/RSE-delivered/">here</a> and the link for the repo is <a href='https://github.com/eliza-an/RSE-delivered'>here</a>  </p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Pokemon Quiz</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer2.jpg"></img></div>
        <p>This is an application made as a project in a web development bootcamp. In collaboration with my teammates, we created a pokemon quiz which displays which pokemon youare. The application uses Apis and had multiple quirky features like a music button and a donloadable PDF certificate. The link to the application is <a href="https://eliza-an.github.io/pokepod-pokemon-quiz/">here</a> and the link for the repo is <a href='https://github.com/eliza-an/pokepod-pokemon-quiz'>here</a></p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>ReadMe Generator</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer3.jpg"></img></div>
        <p>This is an application displaying the use of node.js. The application can be used to generate a ReadMe using by answering a series of prompts. The link to the repo is <a href="https://github.com/eliza-an/team-profile-generator">here</a> </p>
  
      </div>

    
      <div className='firstCard'>
        <h2 className='cardtitle'>Daily Planner application</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer4.jpg"></img></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Random Password Generator</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer5.jpg"></img></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Coding Quiz game</h2>
       <div className="imageDiv"> <img  className="computer1" src="/img/computer6.jpg"></img></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
      </div>
    </div>
  );
}
export default Portfolio;

