<<<<<<< ours
import "./App.css";
import logo from "./logo.svg";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Summary from "./Pages/Summary";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Admin from "./Pages/Admin";
import Signup from "./Pages/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SupervisedAnalysis from "./Pages/SupervisedAnalysis";
import UnsupervisedAnalysis from "./Pages/UnsupervisedAnalysis";
import CookieFooter from "./components/CookieFooter";
import Footer from "./components/Footer";
import Filter from './Pages/Filter';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, Amplify } from "aws-amplify";

function App({ signOut, user }) {
=======
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import NavBar from './components/Navbar';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Summary from './Pages/Summary';
import Login from './Pages/Login'
import Logout from './Pages/Logout'

const App = () => {
>>>>>>> theirs
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
<<<<<<< ours

  // let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
  // groups = groups[0];
  const groups = "";

  return (
      <BrowserRouter>
        <div className="bg-white">
          <NavBar signOut={signOut} groups={groups} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Admin" element={<Admin />}></Route>
            <Route path="Summary" element={<Summary />}></Route>
            <Route path="Filter" element={<Filter />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route
              exact
              path="/PrivacyPolicy"
              element={<PrivacyPolicy />}
            ></Route>
            <Route
              exact
              path="/SupervisedAnalysis"
              element={<SupervisedAnalysis />}
            ></Route>
            <Route
              exact
              path="/UnsupervisedAnalysis"
              element={<UnsupervisedAnalysis />}
            ></Route>
            <Route exact path="/Logout" element={<Logout />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
        <Login />
        <CookieFooter />
        <Footer/>
      </BrowserRouter>
=======

  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/dashboard">
          {isAuthenticated ? (
            <Summary onLogout={handleLogout} />
          ) : (
            <Summary to="/login" />
          )}
        </Route>
        <Route path="/logout">
          {isAuthenticated ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        </Route>
      </Routes>
      <Home />
    </div>
>>>>>>> theirs
  );
};

export default App;
