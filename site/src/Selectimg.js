
import chu from '../src/츄.jpg';
import sejeng from '../src/김세정.jpg';
import boyuong from '../src/박보영.jpg';
import suzy from '../src/수지.jpg';
import winter from '../src/윈터.jpg';
import kalina from '../src/카리나.jpg';
import React, { useState, useEffect } from "react";


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
    
    const model_Img = [winter, suzy, chu, boyuong, kalina, sejeng];
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
                            
                                {/* <img class="img-fluid" key= '1' src={winter} alt="alternative" onClick={(e) => getImgmodel(winter)}/> */}
                                {modelList[0]}
                        </div>
                        <p></p>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                {/* <img class="img-fluid" key= '2' src={suzy} alt="alternative" onClick={(e) => getImgmodel(suzy)}/> */}
                                {modelList[1]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                {/* <img class="img-fluid" key= '3' src={chu} alt="alternative" onClick={(e) => getImgmodel(chu)}/> */}
                                {modelList[2]}
                        </div> 
                       
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                {/* <img class="img-fluid" key= '4' src={boyuong} alt="alternative" onClick={(e) => getImgmodel(boyuong)}/> */}
                                {modelList[3]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                {/* <img class="img-fluid" key= '5' src={kalina} alt="alternative" onClick={(e) => getImgmodel(kalina)}/> */}
                                {modelList[4]}
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                {/* <img class="img-fluid" key= '6' src={sejeng} alt="alternative" onClick={(e) => getImgmodel(sejeng)}/> */}
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
