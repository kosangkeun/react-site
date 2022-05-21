import React from "react";

function HEADER(){
    return(
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <div class="container">
            
            
        <a class="navbar-brand logo-image" href="http://www.semyung.ac.kr/"><img src='images/SMU.png'/></a>  

           
            

            <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#header">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#Select">Select Image</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#cards-1">Voice</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#accordion-1">Result</a>
                    </li>
                </ul>
                
            </div> 
        </div> 
    </nav> 
    )
}
export default HEADER;