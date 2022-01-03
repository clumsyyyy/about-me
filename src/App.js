import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, About, Footer } from "./components"



function App() {
  return (
  <Router>
    <Navigation/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about-me" element = {<About/>}/>
      </Routes>
  </Router>
  );
}

export default App;
