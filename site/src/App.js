
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
import uuid from 'react-uuid';

function App() {

  const [img_num, set_img_num] = useState(0);


  
  return (
    <div className="App">

    <HEADER/>
    <Intro/>
    <Sequence/>
    <Selectimg setkeynum={set_img_num}/>
    

    <div></div>
    
    <Inputvoice keynum={img_num}/>
    <Resultimg/>
    <Footers/>
           
    </div> 
    
  );
}

export default App;
