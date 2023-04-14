import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AdminLink from "./AdminLink";
import Logout from "../Pages/Logout";
import { Auth, Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);
function NavBar({ signOut, groups, authenticated, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let [isAuthenticated, setIsAuthenticated] = useState("");

  useEffect(() => {
    setIsAuthenticated(authenticated);
    const closeDropdown = () => setDropdownOpen(false);
    document.addEventListener("mouseenter", closeDropdown);
    return () => {
      document.removeEventListener("mouseleave", closeDropdown);
    };
  }, []);

  if (isAuthenticated) {
    groups = "admin";
  }
  // if (
  //   isAuthenticated &&
  //   user.signInUserSession.accessToken.payload.hasOwnProperty("cognito:groups")
  // ) {
  //   groups = user.signInUserSession.accessToken.payload["cognito:groups"];
  //   groups = groups[0];
  // }

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <Navbar className="Nav" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="Title">
          Fag el-Gamous
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            {isAuthenticated === true ? (
              <>
                <Nav.Link as={Link} to="/" authenticated={isAuthenticated}>
                  Home
                </Nav.Link>
                <AdminLink groups={groups} />
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/Summary"
                    authenticated={isAuthenticated}
                  >
                    Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Filter">
                    Filtering
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/SupervisedAnalysis">
                    Supervised Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UnsupervisedAnalysis">
                    Unsupervised Analysis
                  </NavDropdown.Item>
                </NavDropdown>
                <Logout user={user} authenticated={isAuthenticated} />
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/" authenticated={isAuthenticated}>
                  Home
                </Nav.Link>
                <AdminLink groups={groups} />
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/Summary"
                    authenticated={isAuthenticated}
                  >
                    Summary
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Filter">
                    Filtering
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Analysis" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/SupervisedAnalysis">
                    Supervised Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/UnsupervisedAnalysis">
                    Unsupervised Analysis
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="LogButton" as={Link} to="/Login">
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
