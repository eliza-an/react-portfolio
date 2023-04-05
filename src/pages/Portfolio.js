import React from 'react';
import "./portfolio.css"



const Portfolio= () =>{
  return (
    <div>
      <h3 className='title'>Portfolio</h3>
      <div className='firstCard'>
        <h2 className='cardtitle'>RSE Delivered</h2>
       <div className="imageDiv"> <img  className="computer1" alt="computer" src="/img/computer.jpg"></img></div>
        <p>This website is designed fo the business RSE. It's main purpose is to represent the company and explain the services offered. This page is currently not active, it is simply a template until the cutom domain is ready. The link to the application is <a href="https://eliza-an.github.io/RSE-delivered/">here</a> and the link for the repo is <a href='https://github.com/eliza-an/RSE-delivered'>here</a>  </p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Pokemon Quiz</h2>
       <div className="imageDiv"> <img  className="computer1"  alt="computer " src="/img/computer2.jpg"></img></div>
        <p>This is an application made as a project in a web development bootcamp. In collaboration with my teammates, we created a pokemon quiz which displays which pokemon youare. The application uses Apis and had multiple quirky features like a music button and a donloadable PDF certificate. The link to the application is <a href="https://eliza-an.github.io/pokepod-pokemon-quiz/">here</a> and the link for the repo is <a href='https://github.com/eliza-an/pokepod-pokemon-quiz'>here</a></p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>ReadMe Generator</h2>
       <div className="imageDiv"> <img  className="computer1" alt="computer " src="/img/computer3.jpg"></img></div>
        <p>This is an application displaying the use of node.js. The application can be used to generate a ReadMe using by answering a series of prompts. The link to the repo is <a href="https://github.com/eliza-an/team-profile-generator">here</a> </p>
  
      </div>

    
      <div className='firstCard'>
        <h2 className='cardtitle'>Daily Planner application</h2>
       <div className="imageDiv"> <img  className="computer1" alt="computer " src="/img/computer4.jpg"></img></div>
        <p>This application was created as a daily time tracker. It's main purpose was to track your day to day activities by the hour and notify you of those activities that have passed. The link to the repo is <a href="https://github.com/eliza-an/daily-planner-application">here</a> and the link for the repo is <a href='https://eliza-an.github.io/daily-planner-application/'>here</a>.</p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Team Profile Generator</h2>
       <div className="imageDiv"> <img  className="computer1" alt="computer " src="/img/computer5.jpg"></img></div>
        <p>The team profile generator is an application that allows you to create a team profile using node.js. The aim of this application was to learn test driven development and therefore pass all tests The link to the repo is <a href="https://github.com/eliza-an/team-profile-generator">here</a>. </p>
  
      </div>

      <div className='firstCard'>
        <h2 className='cardtitle'>Coding Quiz game</h2>
       <div className="imageDiv"> <img  className="computer1" alt="computer" src="/img/computer6.jpg"></img></div>
        <p>This is a simple javascript coding quiz game. The app uses local storage to store and display your previous results. Given you andswer incorrectly, 5 seconds willbe subtracted from the timer.The link to the repo is <a href="https://github.com/eliza-an/coding-quiz-game">here</a> and the link for the repo is <a href='https://eliza-an.github.io/coding-quiz-game/'>here</a>.</p>
  
      </div>
    </div>
  );
}
export default Portfolio;

