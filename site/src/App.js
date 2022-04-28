
import './App.css';
import '../src/bootstrap.css';
import '../src/styles.css';
import '../src/fontawesome-all.css';
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
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
                        <a class="nav-link page-scroll" href="#about">Select Image</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#services">Voice</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#contact">Result</a>
                    </li>
                </ul>
                <span class="nav-item social-icons">
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                </span>
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
                        <a class="btn-outline-lg page-scroll" href="#contact"><i class="fas fa-user"></i>Contact Me</a>
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
        
        <form>
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
                            
                                <img class="img-fluid" src="images/김태리.jpg" alt="alternative"/>
                                
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
        </form>
    </div> 

    <div></div>
    


    <div class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">2. Input Your Voice</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">                   
                                                         

                    
                    <div class="card">
                        <div class="card-body">
                        <form>
                        <input type="file" id="avatar" name="avatar" accept="audio/*"></input>
                        
                        </form>
                        </div>
                        
                    </div>
                    <div class="form-group"><button type="submit" class="form-control-submit-button">전송</button></div>
                    

                   
                    
                    

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



 
    <div class="accordion-1">
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
 


    
    <div id="contact" class="form-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Contact details</h2>
                    <p class="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a class="blue no-line" href="#your-link">contact@domain.com</a></p>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    
                 
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="cname" required/>
                            <label class="label-control" for="cname">Name</label>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="cemail" required/>
                            <label class="label-control" for="cemail">Email</label>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control-textarea" id="cmessage" required></textarea>
                            <label class="label-control" for="cmessage">Project details</label>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                  

                </div>
            </div> 
        </div> 
    </div> 



 
    <div class="footer bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
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
