import React from 'react'
import { Button, FormGroup} from 'reactstrap';
import CarouselHome from './CarouselHome';
import '../style/Home.css'
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="second">
          <CarouselHome />
         <div className="second">
           <h2 className="who"> Who We Are</h2>
         <h2> Who we are
              Welcome to Physio Therapy
              & Chiroparctor Clinic
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
               sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam</h2>
               <Button  color="primary">our services</Button>
        </div>
        <div class="widgets-section">
            	<div class="row clearfix">
                	
                    
                    <div className="big-column col-md-6 col-sm-12 col-xs-12">
                        <div className="row clearfix">
                        
                            
                            <div className="footer-column col-md-7 col-sm-6 col-xs-12">
                                <div className="footer-widget logo-widget">
									<div className="logo">
                                    	<a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                                    </div>
                                    <div className="text">we address the cause of your pain, not just the symptom.</div>
                                </div>
                            </div>
                            
                          
                            <div className="footer-column col-md-5 col-sm-6 col-xs-12">
                                <div className="footer-widget links-widget">
                                	<h2>Quick Links</h2>
                                    <div className="widget-content">
										<ul className="list">
                                        	<li><a href="#">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Request Call Back</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                  
                    <div className="big-column col-md-6 col-sm-12 col-xs-12">
                        <div className="row clearfix">
                        
                           
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget links-widget">
                                	<h2>Symptom</h2>
                                    <div className="widget-content">
										<ul className="list">
                                        	<li><a href="#">Neck Pain</a></li>
                                            <li><a href="#">Head Pain</a></li>
                                            <li><a href="#">Back Pain</a></li>
                                            <li><a href="#">Whiplash</a></li>
                                            <li><a href="#">Work Injury</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                          
                            <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-widget info-widget">
                                	<h2>Get in Touch</h2>
                                    <div className="widget-content">
                                    	<div className="number">(079) 333 4444</div>
                                        <div className="text">contact@DoctorTech.com 121 Khalda Street, Amman </div>
                                      
                                        	<FormGroup><a href="#"><span className="fab fa-facebook-square fa-2x"></span></a>
                                            <a href="#"><span className="fab fa-linkedin fa-2x"></span></a>
                                            <a href="#"><span className="fab fa-twitter-square fa-2x"></span></a>
                                            <a href="#"><span className="fab fa-google-plus-square fa-2x"></span></a></FormGroup>
                                            
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

        <div className="footer-bottom">
        	<div className="auto-container clearfix">
                <div className="pull-left">
                    <div className="copyright">Copyright © DoctorTech 2018. All rights reserved. </div>
                </div>
                <div className="pull-right">
                    <div className="created">Created by:BlackHole Team </div>
                </div>
            </div>
        </div>
        </div>

      </div>
    )
  }
}

export default Home
