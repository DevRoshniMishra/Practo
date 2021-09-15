import React, { Component } from 'react'
import '../Footer/Footer.css';
import WhiteLogo from '../../assets/white_practo_logo.svg';
export default class footer extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row footer-section">
                        <div className="col-md-12 ">
                            <div className="row">
                                <div className="col-md-3 quick_links">
                                    <p>Practo</p>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Press</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>

                                </div>
                                <div className="col-md-3 quick_links">
                                    <p>For patients</p>
                                    <ul>
                                        <li><a href="#">Ask free health questions</a></li>
                                        <li><a href="#">Serach for doctors</a></li>
                                        <li><a href="#">Serach for clinics</a></li>
                                        <li><a href="#">Serach for hospitals</a></li>
                                        <li><a href="#">Book diagostics search </a></li>
                                        <li><a href="#">Book full body checkup</a></li>
                                        <li><a href="#">Read health articles</a></li>
                                        <li><a href="#">Consult a doctor</a></li>
                                        <li><a href="#">Order medicines</a></li>
                                        <li><a href="#">Read about medicines</a></li>
                                    </ul>

                                </div>
                                <div className="col-md-3 quick_links">
                                    <p>For doctors</p>
                                    <ul>
                                        <li><a href="#">Practo Consult</a></li>
                                        <li><a href="#">Practo health feed</a></li>
                                        <li><a href="#">Practo Profile</a></li>
                                        <li><a href="#">For clinics</a></li>
                                        <li><a href="#">Practo Prime</a></li>
                                        <li><a href="#">Read health articles</a></li>
                                        <li><a href="#">Consult a doctor</a></li>
                                        <li><a href="#">Order medicines</a></li>
                                        <li><a href="#">Read about medicines</a></li>
                                    </ul>

                                </div>
                                <div className="col-md-3 quick_links">
                                    <p>For hospitals</p>
                                    <ul>
                                        <li><a href="#">Book diagostics search </a></li>
                                        <li><a href="#">Book full body checkup</a></li>
                                        <li><a href="#">Read health articles</a></li>
                                        <li><a href="#">Consult a doctor</a></li>
                                        <li><a href="#">Order medicines</a></li>
                                        <li><a href="#">Read about medicines</a></li>
                                        <li><a href="#">Practo Consult</a></li>
                                        <li><a href="#">Practo health feed</a></li>
                                        <li><a href="#">Practo Profile</a></li>
                                        <li><a href="#">For clinics</a></li>
                                        <li><a href="#">Practo Prime</a></li>
                                    </ul>
                                  

                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className=" text-center col-md-4">
                            <img src={WhiteLogo}/>
                            <p style={{color: "white"}}>Copyright @2021 , All rights reserved</p>
                        </div>
                        
                    </div>

                </div>

            </>
        )
    }
}
