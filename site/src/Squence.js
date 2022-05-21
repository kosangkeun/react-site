import React from "react";

function Squence(){
    return(
        <div id="about" class="basic-1 bg-gray">
        <h1>Squence</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container first">
                       <h4>1.Select image</h4>
                       
                    </div> 
                    <img src="images/Select Image.png" width="100%" height="100%"/>
                </div> 
                <div class="col-lg-4">
                    <div class="text-container second">                    
                        <h4>2.Input your voice</h4>
                    </div> 
                    <img src="images/Voice.png" width="100%" height="100%"/>
                </div> 
                <div class="col-lg-4">
                    <div class="text-container third">                        
                        <h4>3.Result</h4>
                    </div> 
                    <img src="images/Result.jpg" width="100%" height="100%"/>
                </div> 
            </div> 
        </div> 
    </div> 
    )
}
export default Squence;