
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
const Form = () => {
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState(null);
  
    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      try {
        const response = await axios({
          method: "post",
          url: "192.168.154.43:5000",
          
          data: base64(formData),
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
    }
  
    const handleFileSelect = (event) => {
      
      const file = event.target.files[0];
      getBase64(file);
      

    }
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // setEncodedFile(reader.result);
          setSelectedFile(reader.result);
          // onLoad(reader.result);
        };
      };

    
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect}/>
        <button type="submit" value="Upload File" />
      </form>
    )
  };

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
