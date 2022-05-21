
import chu from '../src/츄.jpg';
import sejeng from '../src/김세정.jpg';
import boyuong from '../src/박보영.jpg';
import suzy from '../src/수지.jpg';
import winter from '../src/윈터.jpg';
import kalina from '../src/카리나.jpg';
import React, { useState, useEffect } from "react";
function Selectimg(){
    const getImgBase64 = async (file) => {
        
        const blob = await (await fetch(file)).blob(); 
        console.log(blob)
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
          // setEncodedFile(reader.result);
          setImgValue(reader.result);
          console.log(reader.result);
          // onLoad(reader.result);
        };
      };

    const [imgValue, setImgValue] = useState("images/윈터.jpg");
    return(
        <div class="basic-4">
        <h2 id='Select'>1. Select Image</h2>
        
        
        <div class="container">
            
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        
                        <div class="image-container">
                            
                                <img class="img-fluid" src={winter} alt="alternative" onClick={(e) => getImgBase64(winter)}/>
                                
                        </div>
                        <p></p>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src={suzy} alt="alternative" onClick={(e) => getImgBase64(suzy)}/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src={chu} alt="alternative" onClick={(e) => getImgBase64(chu)}/>
                                
                        </div> 
                       
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src={boyuong} alt="alternative" onClick={(e) => getImgBase64(boyuong)}/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src={kalina} alt="alternative" onClick={(e) => getImgBase64(kalina)}/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src={sejeng} alt="alternative" onClick={(e) => getImgBase64(sejeng)}/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                
            </div>
            
            

        </div> 
        
    </div> 
    )
}
export default Selectimg