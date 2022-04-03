import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='teko'> Teshla</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav className='text-light'>

                            <Link className='navbar-color' to='/'> Home </Link>
                            <Link className='navbar-color' to='/reviews'> Reviews </Link>
                            <Link className='navbar-color' to='/dashboard'> Dashboard </Link>
                            <Link className='navbar-color' to='/blogs'> Blogs </Link>
                            <Link className='navbar-color' to='/about'> About </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;