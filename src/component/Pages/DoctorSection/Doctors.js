import React, { Component } from 'react';
import Badge from '../../../assets/download.png';
import '../DoctorSection/Doctors.css';
import Data from '../../../../src/Data/db.json';
import DummyImage from '../../../assets/DummyImage.jpg';
import { Link } from 'react-router-dom';
import Profile from './Profile';


export default class Doctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false ,
        }
    }

    handleClick = (id) =>{
        console.log(id);  
    }
  
    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
    render() {
        return (
            <>
                <div className="container doctor_search">
                    <div className="row">
                        <div className="col-md-8 ">
                            <form className="doctor_search">
                                <input className="search_location" type="search" placeholder="Search Location" />
                                <input className="search_location" type="search" placeholder="Find Doctors" />
                            </form>
                        </div>
                        <div className="col-md-4">
                            <p className="dummy-text">Fed up of endless wait ?</p>
                            <div className="parent-divtext">
                                <p className="dummy-para">Look for clinic with Prime</p>
                                <span><img className="badge-icon" src={Badge} /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    {Data.doctors.map((items, index) => {
                                        return (
                                            <div key={index} className="parent-doc">
                                                <div className="dummy-image">
                                                    <img src={items.image} />
                                                    <div className="sticker">
                                                        <img src={items.sticker} />
                                                    </div>
                                                   <Link  className="btn btn-primary" to= {`/Profile/${items.id}`} >View Profile</Link>
                                                   <div>
                                                </div>
                                               
                                                   
                                                </div>
                                                <div>
                                                    <ul className="details-list">
                                                        <li className="name"><Link to="/">{items.name}</Link></li>
                                                        <li className="occupation">{items.occupation}</li>
                                                        <li className="occupation">{items.specialist}</li>
                                                        <li className="occupation">{items.yearsofexp}</li>
                                                        <div className="aline-lists">
                                                            <li>{items.locality}</li>
                                                            <li>{items.workingplace}</li>
                                                        </div>
                                                        <li> <i class="fa fa-inr" aria-hidden="true"></i> {items.charges} Consultation fees at clinic</li>
                                                        <div className="aline-lists">
                                                            <li>{items.email}</li>
                                                            <li>{items.mobilenumber}</li>
                                                        </div>
                                                        <div className="aline-lists">
                                                            <li><i class="fa fa-thumbs-up" aria-hidden="true"></i> 96 % </li>
                                                            <li><Link to="/">41 Patient Stories</Link></li>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-md-4 appointment_section">
                                    {Data.doctors.map((items, index) => {
                                        return (
                                            <div key={index}>
                                                <p><i class="fa fa-calendar-plus-o" aria-hidden="true"></i> Available Tomorrow</p>
                                                <div>
                                                    <button onClick={this.toggle} className="appointment_btn"> Book an Appointment {this.state.show ? 'show' : 'hide'} <br /><span>No Booking Fees</span></button>
                                                </div>
                                                <p className="slot"> Book a slot of {items.availabletiming}</p>
                                                <div>
                                                    {this.state.show && <div>
                                                        <div className="time-slots">
                                                            <p>Time Slots/Fees</p>
                                                            <button className="btn btn-outline-primary">12 PM - 600/-</button>
                                                            <button className="btn btn-outline-primary">2 PM - 600/-</button>
                                                           
                                                            <button className="btn btn-outline-primary">4 PM - 500/-</button>
                                                            <button className="btn btn-outline-primary">6 PM - 500/-</button>
                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card-section">
                                <h4>Provide current location to see doctors near you </h4>
                                <p>You are seeing results from Mumbai. See results near you </p>
                                <div>
                                    <button className="btn btn-outline-primary">Andheri</button>
                                    <button className="btn btn-outline-primary">Borivali</button>
                                    <button className="btn btn-outline-primary">Mulund</button>
                                </div>
                                <div><br />
                                    <button className="btn btn-outline-primary">Kalyan</button>
                                    <button className="btn btn-outline-primary">Thane</button>
                                    <button className="btn btn-outline-primary">Mira Road</button>
                                </div><br/>
                                <div>
                                    <button className="btn btn-outline-primary">Badalapur</button>
                                    <button className="btn btn-outline-primary">Airoli</button>
                                    <button className="btn btn-outline-primary">Ramnagar</button>
                                </div><br/>
                                <div><br/>
                                    <button className="btn btn-success search-btn">Search Location <i class="fa fa-location-arrow" aria-hidden="true"></i></button>
                                    <button className="btn btn-primary search-btn">Current Location <i class="fa fa-map-marker" aria-hidden="true"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
