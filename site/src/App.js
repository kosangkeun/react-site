
import './App.css';
import '../src/bootstrap.css';
import '../src/styles.css';
import '../src/fontawesome-all.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import base64 from 'base-64';
import chu from '../src/츄.jpg';


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
          url: "/images",
          
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
  return (
    <div className="App">




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




    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h1 class="h1-large">Facial Introduce</h1>
                        <p class="introduce"> 외국 영화, 드라마 등의 영상 매체를 우리말로 더빙한 컨텐츠들은 입모양이 맞지 않는 문제가 있습니다</p>
                        
                        <p class="introduce"> 예를 들어서 할리우드 영화 등을 보면, 원본 언어는 영어이고, 배우들 또한 영어로 말하지만, 이를 한국어로 더빙하게 되면 배우들의 입모양이 맞지 않는다는것은 당연할 것입니다</p>
                        <p class="introduce"> Talking Face 분야는, 사람이 말하는 목소리와 인물의 정면 얼굴 사진이 들어갔을때, 해당 사진속의 인물이 동시에 입력된 목소리로 말하는 듯하게 동영상으로 만들어주는 테스크 입니다</p>
                        <a class="btn-solid-lg page-scroll" href="#about">Start</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
    


   
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
   
    <div class="basic-4">
    <h2 id='Select'>1. Select Image</h2>
        
        
        <div class="container">
            
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/윈터.jpg" alt="alternative"/>
                                
                        </div>
                        <p></p>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/수지.jpg" alt="alternative"/>
                                
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
                            
                                <img class="img-fluid" src="images/박보영.jpg" alt="alternative"/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/카리나.jpg" alt="alternative"/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/김세정.jpg" alt="alternative"/>
                                
                        </div> 
                        
                    </div> 
                </div> 
                
            </div>
            
            

        </div> 
        
    </div> 

    <div></div>
    


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
                    <div class="form-group"><button type="submit" class="form-control-submit-button">전송</button></div>
                    </form>
                    

                   
                    
                    

                </div> 
            </div> 
        </div> 
    </div> 



    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <hr class="section-divider"/>
            </div> 
        </div> 
    </div> 



 
    <div id="accordion-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">Result</h2>
                    
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <img src='images/Result.jpg' width="100%" height="100%"/>
                            
                        </div>
                        
                        
                        
                       
                    </div> 

                </div> 
            </div> 
        </div> 
    </div> 
 


    
    



 
    <div class="footer bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                   
                </div> 
            </div> 
        </div> 
    </div> 
    


    
    <div class="copyright bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © <a class="no-line" href="#your-link">Your name</a></p>
                </div> 
            </div> 
        </div> 

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Distributed By <a class="no-line" href="https://themewagon.com/">Themewagon</a></p>
                </div> 
            </div> 
        </div> 
        
    </div> 
           
    </div> 
    
  );
}

export default App;
