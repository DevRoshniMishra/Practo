import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/HomeSection/Home';
import Footer from './component/Footer/Footer';
import DoctorSection from './component/Pages/DoctorSection/Doctors';
import ConsultantSection from './component/Pages/ConsultantSection/Consultant';
import PharmacySection from './component/Pages/PharmacySection/Pharmacy';
import DiagnosticSection from './component/Pages/DiagnosticSection/Diagnostic';
import Profile from './component/Pages/DoctorSection/Profile';

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/doctor" component={DoctorSection}></Route>
                    <Route exact path="/consulatant" component={ConsultantSection}></Route>
                    <Route exact path="/pharmacy" component={PharmacySection}></Route>
                    <Route exact path="/diagnostic" component={DiagnosticSection}></Route>
                    <Route exact path="/Profile/:doctorid" component={Profile} ></Route>
                    <Footer/>
                </BrowserRouter>
            </>

        )
    }
}

