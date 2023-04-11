import "./App.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import logo from './logo.svg';
import Home from './Pages/Home';
import NavBar from './components/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from './Pages/Summary';
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Admin from './Pages/Admin'
import Signup from './Pages/CreateAccount'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import SupervisedAnalysis from './Pages/SupervisedAnalysis'
import UnsupervisedAnalysis from './Pages/UnsupervisedAnalysis'
import CookieFooter from './components/CookieFooter'

function App({ signOut, user }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
    <div className="bg-white">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/Admin" element={<Admin />}>
        </Route>
        <Route exact path="/Summary" element={<Summary />}>
        </Route>
        <Route exact path="/Signup" element={<Signup />}>
        </Route>
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />}>
        </Route>
        <Route exact path="/SupervisedAnalysis" element={<SupervisedAnalysis />}>
        </Route>
        <Route exact path="/UnsupervisedAnalysis" element={<UnsupervisedAnalysis />}>
        </Route>
        <Route exact path="/Logout" element={<Logout />}>
        </Route>
        <Route exact path="/Login" element={<Login />}>    
        </Route>
      </Routes>
    </div>
    <CookieFooter />
  </Router>
  );
};

export default withAuthenticator(App);