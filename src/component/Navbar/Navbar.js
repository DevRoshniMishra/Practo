import React, { Component } from 'react';
import './Navbar.css';
import Logo from '../../assets/practo.svg';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="/"><img src={Logo} /></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/doctor">Doctors</Link>
                                                <Link to="/doctor" className="sublink">Book an Appointment</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/consulatant">Consulatant</Link>
                                                <Link to="/consulatant" className="sublink">Consult with top Doctors</Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link" to="/pharmacy">Pharmacy</Link>
                                                <Link to="/pharmacy" className="sublink">Medicine and health product</Link>

                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/diagnostic">Diagnostics</Link>
                                                <Link to="/diagnostic">Book test and checkups</Link>

                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="/providers" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    For Providers
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <Link className="dropdown-item" to="/">Practo Prime</Link>
                                                    <Link className="dropdown-item" to="/">Software for Providers</Link>
                                                    <Link className="dropdown-item" to="/">Corporate Wellness</Link>
                                                    <Link className="dropdown-item" to="/">List your practice for free</Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="security" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Security & help
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <Link className="dropdown-item" to="/">Data Security</Link>
                                                    <Link className="dropdown-item" to="/">Help</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="btn btn-login btn-outline-primary">Login</button>
                                            </li>
                                            <li>
                                                <button className="btn btn-signup btn-outline-primary">Sign Up</button>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

