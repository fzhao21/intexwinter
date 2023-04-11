import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Summary from "./Pages/Summary";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout.jsx";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App({ signOut, user }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

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
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default withAuthenticator(App);