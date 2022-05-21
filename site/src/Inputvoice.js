import React from "react";
import AudioRecord from "./AudioRecord";

function Inputvoice(){
    return(
        <div id="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">2. Input Your Voice</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">                   
                                                         

                <form>
                    <div class="card">
                        <div class="card-body">

                        <input type="file" id="avatar" name="avatar" accept="audio/*"></input>
                        
                        </div>
                    </div>

                    <div className="form-group">
                        <AudioRecord></AudioRecord>
                    </div>
                
                </form>
                    

                   
                    
                    

                </div> 
            </div> 
        </div> 
    </div> 
    )
}
export default Inputvoice;