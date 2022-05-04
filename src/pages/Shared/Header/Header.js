import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <Navbar className='nav-design py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold fs-2' as={Link} to='/'><span className='text-danger'>CAR</span>GHOOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fonts' as={Link} to='/'>HOME</Nav.Link>
                            <Nav.Link as={Link} to='/#inventory' className='fonts' >INVENTORY</Nav.Link>
                            <Nav.Link className='fonts' >BLOG</Nav.Link>
                            {
                                user?.uid &&
                                <>
                                    <Nav.Link className='fonts' as={Link} to='/inventories'>MANAGE ITEMS</Nav.Link>
                                    <Nav.Link className='fonts' as={Link} to='/add'>ADD ITEM</Nav.Link>
                                    <Nav.Link className='fonts' as={Link} to='/inventories'>MY ITEMS</Nav.Link>
                                </>
                            }
                            {
                                user?.uid ?
                                    <Nav.Link onClick={handleLogout} className='btn btn-primary ms-4 nav-btn text-white'>Logout</Nav.Link>
                                    :
                                    <Nav.Link className='btn btn-primary ms-4 nav-btn text-white' as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;