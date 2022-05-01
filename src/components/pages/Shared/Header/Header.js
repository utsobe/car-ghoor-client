import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar className='nav-design py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold fs-2' href="#home"><span className='text-danger'>CAR</span>GHOOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fonts' href="#features">HOME</Nav.Link>
                            <Nav.Link className='fonts' href="#memes">INVENTORY</Nav.Link>
                            <Nav.Link className='fonts' href="#deets">BLOG</Nav.Link>
                            <button className='btn btn-primary ms-4 nav-btn'>Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;