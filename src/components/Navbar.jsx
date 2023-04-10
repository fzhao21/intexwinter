import React, { useState, useEffect } from 'react';

import { BrowserRouter as NavLink } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

//define all pages
// const Home = () => <h1>Home</h1>;
// const LogIn = () => <h1>LogIn</h1>;
// const Admin = () => <h1>Admin</h1>;
// const Records = () => <h1>Records</h1>
// const SupervisedAnalysis = () => <h1>Supervised Analysis</h1>;
// const UnsupervisedAnalysis = () => <h1>Unsupervised Analysis</h1>;
// const SignOUt = () => <h1>Sign Out</h1>;

const NavBar = ({ isAuthenticated }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
      const closeDropdown = () => setDropdownOpen(false);
      document.addEventListener('mouseenter', closeDropdown);
      return () => {
        document.removeEventListener('mouseleave', closeDropdown);
      };
    }, []);
  
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          {/* <li><NavLink to="/about">About</NavLink></li> */}
          {isAuthenticated ? (
            <>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li className="dropdown">
              <a href="#" onClick={toggleDropdown}>Analysis</a>
                {dropdownOpen && (
                    <ul className="dropdown-menu">
                    <li><a href="/item1">Supervised Analysis</a></li>
                    <li><a href="/item2">Unsupervised Analysis</a></li>
                    </ul>
                )}
                </li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Log In</NavLink></li>
              {/* <li><NavLink to="/register">Register</NavLink></li> */}
            </>
          )}
        </ul>
      </nav>
    );
  };

export default NavBar;