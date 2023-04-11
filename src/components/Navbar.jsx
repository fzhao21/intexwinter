import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
      const closeDropdown = () => setDropdownOpen(false);
      document.addEventListener('mouseenter', closeDropdown);
      return () => {
        document.removeEventListener('mouseleave', closeDropdown);
      };
    }, []);
  
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Navbar className="Nav" expand="lg">
            <Container>
                <Navbar.Brand to='/' className="Title">Fag el-Gamous</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto links">
                        {isAuthenticated ? (
                            <>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/Admin'>Admin</Nav.Link>
                                <Nav.Link href='/Summary'>Summary</Nav.Link>
                                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/SupervisedAnalysis">Supervised Analysis</NavDropdown.Item>
                                    <NavDropdown.Item href="/UnsupervisedAnalysis">Unsupervised Analysis</NavDropdown.Item>
                                </NavDropdown>
                                

                            </>
                        ):(
                            <>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link className="LogButton" to='/Login'>Log In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;