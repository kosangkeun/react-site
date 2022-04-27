
import './App.css';
import logo from './logo.svg';
import '../src/bootstrap.css';
import '../src/styles.css';
import '../src/fontawesome-all.css';
function App() {
  return (
    <div className="App">




    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <div class="container">
            
            
        <a class="navbar-brand logo-image" href="index.html"><img src='images/SMU.png'/></a>  

           
            

            <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#header">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#services">Services</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item page-scroll" href="project.html">Project Details</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#contact">Contact</a>
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
                </div> 
                <div class="col-lg-4">
                    <div class="text-container second">                    
                        <h4>2.Input your voice</h4>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container third">                        
                        <h4>3.push translate button</h4>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
   
    <div class="basic-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-1.jpg" alt="alternative"/>
                                <input type='radio' id='1' name="select" />
                                <label for="1">30대 남성</label>
                        </div>
                        <p></p>
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-2.jpg" alt="alternative"/>
                                <input type='radio' id='2' name="select" />
                                <label for="2">20대 남성</label>
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-3.jpg" alt="alternative"/>
                                <input type='radio' id='3' name="select" />
                                <label for="3">10대 남성</label>
                        </div> 
                       
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-4.jpg" alt="alternative"/>
                                <input type='radio' id='4' name="select" />
                                <label for="4">30대 여성</label>
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-5.jpg" alt="alternative"/>
                                <input type='radio' id='5' name="select" />
                                <label for="5">20대 여성</label>
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            
                                <img class="img-fluid" src="images/work-6.jpg" alt="alternative"/>
                                <input type='radio' id='6' name="select" />
                                <label for="6">10대 여성</label>
                        </div> 
                        
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    


    <div class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">A few words from people that chose to work with me</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    
                    
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“Mark is a skilled developer which will do everything possible to deliver the project on time and I really appreciate that”</p>
                            <div class="details">
                                <img src="images/testimonial-1.jpg" alt="alternative"/>
                                <div class="text">
                                    <div class="testimonial-author">Samantha Bloom</div>
                                    <div class="occupation">Team Leader - Syncnow</div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    

                    
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“Loved to work with Mark he's such an awesome developer with great attention to details. He also has a great eye for design”</p>
                            <div class="details">
                                <img src="images/testimonial-2.jpg" alt="alternative"/>
                                <div class="text">
                                    <div class="testimonial-author">John Rowling</div>
                                    <div class="occupation">Marketing Manager - Nexlite</div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    

                   
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“So glad we started working with Mark. We've used many times his design and development skills for our inhouse online projects”</p>
                            <div class="details">
                                <img src="images/testimonial-3.jpg" alt="alternative"/>
                                <div class="text">
                                    <div class="testimonial-author">Lana Smith</div>
                                    <div class="occupation">General Manager - Shifter</div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    

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
                    <h2 class="h2-heading">Frequent questions</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I contact you and quickly get a quote for my online project?
                                </button>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do you create designs from the ground up or you are using themes?
                                </button>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Will I receive any included maintenance or warranty after project delivery?
                                </button>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    If something goes wrong with the project can I have my money back?
                                </button>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What's your preferred method of payment and do you need an advance?
                                </button>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
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
