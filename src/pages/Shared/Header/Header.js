import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar className='nav-design py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold fs-2' as={Link} to='/'><span className='text-danger'>CAR</span>GHOOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fonts' as={Link} to='/'>HOME</Nav.Link>
                            <Nav.Link className='fonts' href="#memes">INVENTORY</Nav.Link>
                            <Nav.Link className='fonts' href="#deets">BLOG</Nav.Link>
                            <Nav.Link className='btn btn-primary ms-4 nav-btn text-white' as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;