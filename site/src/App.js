
import './App.css';
import '../src/bootstrap.css';
import '../src/styles.css';
import '../src/fontawesome-all.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import base64 from 'base-64';
import HEADER from './Header';
import Intro from './Intro';
import Sequence from './Squence';
import Selectimg from './Selectimg';
import Resultimg from './Resultimg';
import Footers from './Footers';
import Inputvoice from './Inputvoice';
    

function App() {


    
  return (
    <div className="App">

    <HEADER/>
    <Intro/>
    <Sequence/>
    <Selectimg/>
    

    <div></div>
    
    <Inputvoice/>
    <Resultimg/>
    <Footers/>
           
    </div> 
    
  );
}

export default App;
