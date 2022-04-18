import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../../images/danapuri-logo.svg';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navigation = () => {
    return (
        // 

        <nav>
            <div className="wrapper py-5">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links pt-4">
                    <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times " /></label>
                    <li>
                        <a href="#">Home</a></li><a href="#">
                    </a>
                    <li>
                        <a href="#" className="desktop-item dropdown">Solutions & Services <IoMdArrowDropdown /></a>
                        <input type="checkbox" id="showMega" />
                        <label htmlFor="showMega" className="mobile-item">Solutions & Services</label>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src="Ape.png" alt />
                                </div>
                                <div className="row">
                                    <header>Mega 1 Services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">UI/UX</a></li>
                                        <li><a href="#">Website Design</a></li>
                                        <li><a href="#">App Development</a></li>
                                        <li><a href="#">Custom Logo</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Mega 2 Services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Business Email</a></li>
                                        <li><a href="#">Personal Email</a></li>
                                        <li><a href="#">Mobile Email</a></li>
                                        <li><a href="#">Website Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Mega 3 Services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Website Hosting</a></li>
                                        <li><a href="#">Site Seal</a></li>
                                        <li><a href="#">Privacy Seal</a></li>
                                        <li><a href="#">Business Cards</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" /><a href="#">Danapuri Archives</a></li><a href="#">
                    </a>
                    {/* <li><a href="#">
                    </a><a href="#" className="desktop-item">Dropdown Menu</a>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
                        <ul className="drop-menu">
                            <li><a href="#">Drop menu 1</a></li>
                            <li><a href="#">Drop menu 2</a></li>
                            <li><a href="#">Drop menu 3</a></li>
                            <li><a href="#">Drop menu 4</a></li>
                        </ul>
                    </li> */}

                    <li><a href="#">This is Danapuri</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars " /></label>
            </div>
        </nav>





    );
};

export default Navigation;