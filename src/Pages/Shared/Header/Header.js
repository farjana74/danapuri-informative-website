import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../../images/logo 1.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">

                        <img className='img-fluid ps-3' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"

                            navbarScroll
                        >
                            <Nav.Link className=' navigation-bar' href="#action1">Home</Nav.Link>

                            <NavDropdown className='navigation-bar' title="Solution & Service" id="navbarScrollingDropdown">
                                <NavDropdown.Item className=' navigation-bar' href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item className=' navigation-bar' href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className=' navigation-bar' href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className=' navigation-bar' href="#">Danapuri Archives</Nav.Link>
                            <Nav.Link className=' navigation-bar' href="#">This is Danapuri</Nav.Link>
                            <Nav.Link className=' navigation-bar' href="#">Contact Us</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

        // <div className='container'>
        //     <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">

        //         <Navbar.Brand href="#home">
        //             <img className='img-fluid ps-3' src={logo} alt="" />

        //         </Navbar.Brand>
        //         <Navbar.Toggle className='' aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="ms-auto pe-3  ">
        //                 <Nav.Link className=' navigation-bar navs-bar' href="/home">Home</Nav.Link>
        //                 <Nav.Link className=' navigation-bar navs-bar' href="#"></Nav.Link>
        //                 <Nav.Link className=' navigation-bar navs-bar' href="#">Projects</Nav.Link>
        //                 <Nav.Link className=' navigation-bar navs-bar' href="#">Services</Nav.Link>
        //                 <Nav.Link className=' navigation-bar navs-contact' href="#">Contact Us</Nav.Link>

        //             </Nav>


        //         </Navbar.Collapse>

        //     </Navbar>
        // </div>

    );
};

export default Header;