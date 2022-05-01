import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='nav-design' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold fs-2' href="#home">CAR<span className='text-primary'>GHOOR</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fonts' href="#features">HOME</Nav.Link>
                            <Nav.Link className='fonts' href="#pricing">PRICING</Nav.Link>
                            <Nav.Link className='fonts' href="#deets">BLOG</Nav.Link>
                            <Nav.Link className='fonts' href="#memes">INVENTORY</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;