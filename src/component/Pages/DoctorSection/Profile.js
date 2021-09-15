import React, { Component } from 'react';
import Data from '../../../Data/db.json';
import './Doctors.css';
import {Link } from 'react-router-dom';


export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
           doctorId : this.props.match.params.doctorid
        }
        
    }
    handleClick = () =>{
        console.log(this.state.doctorId);
    }
   
    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    {Data.doctors.map((items , index)=>{
                                        return(
                                            <div className="row profile-card" >
                                                <div key={index} className="col-md-3">
                                                    <img className=" card-img" src={items.image}/>
                                                </div>
                                                <div className="col-md-9">
                                                    <div style={{display:'flex'}}>
                                                    <h5>{items.name}</h5>
                                                    <small className="highlighted-pt">Profile is claimed</small>
                                                    </div>
                                                    <div style={{display:'flex'}}>
                                                    <h6>{items.occupation}</h6>
                                                    <small className="highlighted-pt">{items.specialist}</small>
                                                    </div>
                                                    <div style={{display:'flex'}}>
                                                    <h6>{items.email}</h6>
                                                    <h6 style={{marginLeft:'20px'}}>{items.mobilenumber}</h6>
                                                    </div>
                                                    <div style={{display:'flex'}}>
                                                    <h6>{items.locality}</h6>
                                                    <h6 style={{marginLeft:'20px'}}>{items.workingplace}</h6>
                                                    </div>
                                                    <div style={{display:'flex'}} className="badge">
                                                    <img  src={items.badge}/>
                                                    <h6 style={{marginLeft:'10px'}}>{items.yearsofexp}</h6>
                                                    </div>
                                                    <p><i class="fa fa-thumbs-up" aria-hidden="true"></i> 90% (8567 Votes)</p>
                                                    <p>Dr. is experienced in Breast Surgery for cancerous and non-cancerous conditions. Treats all kinds of colorectal disorders. Performs laparoscopic surgeries for Appendix, Gall Bladder, and Hernia.</p>
                                                    <mark><Link to ='/'>Share your story</Link></mark>
                                                </div>
                                                <button onClick={this.handleClick} >Click</button>
                                              
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
