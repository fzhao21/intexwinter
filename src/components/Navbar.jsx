import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
<<<<<<< HEAD
import AdminLink from "./AdminLink";
import Logout from "../Pages/Logout";
=======
import AdminLink from './AdminLink'
import App from '../App'
>>>>>>> a5a4e5d (css and filtering)

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function NavBar({ signOut, groups, authenticated, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

  useEffect(() => {
    const closeDropdown = () => setDropdownOpen(false);
    document.addEventListener("mouseenter", closeDropdown);
    return () => {
      document.removeEventListener("mouseleave", closeDropdown);
    };
  }, []);

  groups = "";
  if (
    isAuthenticated &&
    user.signInUserSession.accessToken.payload.hasOwnProperty("cognito:groups")
  ) {
    groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    groups = groups[0];
  }
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar className="Nav" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="Title">
          Fag el-Gamous
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            {isAuthenticated === true ? (
              <>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <AdminLink groups={groups} />
                <NavDropdown title="Summary" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/Summary">
                    Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Filter">
                    Filter                  
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/SupervisedAnalysis">
                    Supervised Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/UnsupervisedAnalysis">
                    Unsupervised Analysis
                  </NavDropdown.Item>
                </NavDropdown>
<<<<<<< HEAD
                <Logout user={user} authenticated={isAuthenticated} />
              </>
            ) : (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Summary">Summary</Nav.Link>
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/SupervisedAnalysis">
                    Supervised Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/UnsupervisedAnalysis">
                    Unsupervised Analysis
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="LogButton" href="/Login">
=======
                <button className="LogButton" onClick={signOut}>Sign out</button>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} className="LogButton" to="/Login">
>>>>>>> a5a4e5d (css and filtering)
                  Log In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
