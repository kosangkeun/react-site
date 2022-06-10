
import chu from '../src/츄.jpg';
import woman from '../src/여성데모.png';
import boyuong from '../src/박보영.jpg';
import obama from '../src/오바마.PNG';
import jungho from '../src/정호형.PNG';
import dongju from '../src/동주형.PNG';
import React, { useState, useEffect } from "react";
import axios from "axios"

// function Selectimg(){
//     const getImgBase64 = async (file) => {
        
//         const blob = await (await fetch(file)).blob();
         
//         console.log(blob)
//         let reader = new FileReader();
//         reader.readAsDataURL(blob);
//         reader.onload = () => {
//           // setEncodedFile(reader.result);
//           setImgValue(reader.result);
//           console.log(reader.result);
//           // onLoad(reader.result);
//         };
//       };

function Selectimg({setkeynum}){
    // const getImgmodel = async (file) => {
        
    //     const blob = await (await fetch(file));
         
    //     console.log()
    //     // let reader = new FileReader();
    //     // reader.readAsDataURL(blob);
    //     // reader.onload = () => {
    //     //   // setEncodedFile(reader.result);
    //     //   setImgValue(reader.result);
    //     //   console.log(reader.result);
    //     //   // onLoad(reader.result);
    //     // };
    //   };

    const model_Size = {
        width: "318px",
        height: "437px",

    };
    
    const model_Img = [obama, jungho, dongju, woman, boyuong, chu ];
    const modelList = model_Img.map(
        (model_Img, model_Number) => (<img key={model_Number} src={model_Img} style={model_Size} onClick={(e) => setkeynum(model_Number)}/>));
    


        
    return(
        <div class="basic-4">
        <h2 id='Select'>1. Select Image</h2>
        
        
        <div class="container">
            
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        
                        <div class="image-container">          
                                {modelList[0]}
                        </div>
                        <p></p>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">      
                                {modelList[2]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                                {modelList[1]}
                        </div> 
                       
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                                {modelList[3]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">                         
                                {modelList[4]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">                           
                                {modelList[5]}
                        </div> 
                        
                    </div> 
                </div> 
                
            </div>
            
            

        </div> 

    </div> 
    
    )
}
export default Selectimg