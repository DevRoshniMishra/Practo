import React, { Component } from 'react';
import './Home.css';
import SideImage from '../../assets/security_1.webp';
import DoctorBanner from '../../assets/banner.webp';
import DoctorCard from '../../assets/doctor-online.webp';
import DoctorCard2 from '../../assets/find-doctors-2.webp';
import DoctorCard3 from '../../assets/covid_19_home_page_162253443367.webp';
import DoctorCard4 from '../../assets/swasth-card-2.webp';
import DoctorCard5 from '../../assets/coronavirus.webp';
import SecurityCard1 from '../../assets/security_2.webp';
import SecurityCard2 from '../../assets/security_3.webp';
import SecurityCard3 from '../../assets/security_4.webp';
import SecurityCard4 from '../../assets/security_5.webp';
import DoctorCard6 from '../../assets/footer-img.webp';
import Paycard from '../../assets/google_play.webp';
import Paycard2 from '../../assets/apple_store.webp';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-6 col-12">
                        <div>
                            <section className="main_conrainer">
                                <h4 className="banner-heading">Your Home for Health</h4>
                                <p className="banner-title">Find and book</p>
                                <form>
                                    <input className="input-container_location" type="location" placeholder="Search Locations" />
                                    <input className="input-container_service" type="search" placeholder="Search Doctors, clinics, hospitals, etc" />
                                </form>
                                <ul className="shortcut_links">
                                    <li><a href="#">Popular search:</a></li>
                                    <li><a href="#">Dermatologist:</a></li>
                                    <li><a href="#">Pediatrician</a></li>
                                    <li><a href="#">gynecologist-obstetrician</a></li>
                                    <li><a href="#">Others</a></li>
                                </ul>
                                <div className="cards-section">
                                  <div className="cards">
                                      <p><i class="fa fa-commenting-o" aria-hidden="true"></i></p>
                                     <a href="#">Consult with a doctors</a>
                                  </div>
                                  <div className="cards">
                                      <p><i class="fa fa-truck" aria-hidden="true"></i></p>
                                     <a href="#">Order medicines</a>
                                  </div>
                                  <div className="cards">
                                      <p><i class="fa fa-medkit" aria-hidden="true"></i></p>
                                     <a href="#">View medical records</a>
                                  </div>
                                  <div className="cards">
                                      <p><i class="fa fa-file-text" aria-hidden="true"></i></p>
                                     <a href="#">Book test</a>
                                  </div>
                                  <div className="cards">
                                      <p><i class="fa fa-bookmark" aria-hidden="true"></i></p>
                                     <a href="#">Read articles</a>
                                  </div>
                                  <div className="cards">
                                      <p><i class="fa fa-suitcase" aria-hidden="true"></i></p>
                                     <a href="#">For healthcare providers</a>
                                  </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container safety-section">
                    <div className="row">
                        <div className="col-md-6 " >
                            <h4 className="heading">Safety of your data is our<br /><span className="highlighted_text">top priority.</span> </h4>
                            <ul className="service-lists">
                                <li>Multilevel security checks</li>
                                <li>Multiple data backups</li>
                                <li>Stringent data privacy policies</li>
                            </ul>
                            <button className="btn-more">Read More</button>
                        </div>
                        <div className="col-md-6">
                            <img src={SideImage} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                           <div className="row">
                               <div className="col-md-12 doctorbanner">
                               <img src={DoctorBanner}/>
                               </div>
                               <div className='col-md-6 doctorcard'>
                                   <img src={DoctorCard}/>
                               </div>
                               <div className='col-md-6 doctorcard'>
                                   <img src={DoctorCard2}/>
                               </div>
                           </div>
                        </div>                                  
                    </div>
                </div>
                <div className="container-fluid doctorbanner1">
                    <div className="row">
                        <div className="col-md-4 doctorcard">
                            <img src={DoctorCard3}/>
                        </div>
                        <div className="col-md-4 doctorcard">
                            <img src={DoctorCard4}/>
                        </div>
                        <div className="col-md-4 doctorcard">
                            <img src={DoctorCard5}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row security-cards">
                                <div className="col-md-3">
                                    <img src={SecurityCard1}/>
                                    <h5>256-bit encryption</h5>
                                </div>
                                <div className="col-md-3">
                                    <img src={SecurityCard2}/>
                                    <h5>ISO 27001 certified</h5>
                                </div>
                                <div className="col-md-3">
                                    <img src={SecurityCard3}/>
                                    <h5>HIPAA compliant data centers</h5>
                                </div>
                                <div className="col-md-3">
                                    <img src={SecurityCard4}/>
                                    <h5>DSCI member</h5>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 doctorcard doctorcard-left">
                                    <h5 className="doctorcard-heading">Instant appointment with doctors <br/><span className="highlighted-text">.Guaranteed</span>.</h5>
                                    <ul className="list-items">
                                        <li>100,000 Verified doctors</li>
                                        <li>3M+ Patient recommendations</li>
                                        <li>25M Patients/year</li>
                                    </ul>
                                    <button className="btn-doctor">Find me the right doctor</button>
                                    <h5 className="doctorcard-heading">Download the Practo app</h5>
                                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                                    <a href="#">Get the link to download the app</a>
                                    <form className="form-details">
                                        <span className="highlighted-number">91+</span><input className="number-input" type="number" placeholder="Enter Your Number"/> 
                                        <span><button className="btn btn-sms">Send SMS</button></span>
                                    </form>
                                    <div className="paycard">
                                        <img src={Paycard}/>
                                        <img src={Paycard2}/>
                                    </div>

                                </div>
                                <div className="col-md-6 doctorcard">
                                    <img src={DoctorCard6}/>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
            

        )
    }
}
