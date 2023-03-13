import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import navBar from "./components/navbar"
import About from "../src/pages/About"
import Portfolio from "../src/pages/Portfolio"
import Contact from "../src/pages/Contact"
import App from "../src/pages/App"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App/>
)