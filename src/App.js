import "./App.css";
import logo from "./logo.svg";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Summary from "./Pages/Summary";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Filter from "./Pages/Filter";
import Admin from "./Pages/Admin";
import Signup from "./Pages/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import SupervisedAnalysis from "./Pages/SupervisedAnalysis";
import UnsupervisedAnalysis from "./Pages/UnsupervisedAnalysis";
import CookieFooter from "./components/CookieFooter";
import Footer from "./components/Footer";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth, Amplify } from "aws-amplify";

function App({ signOut, user, authenticated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
  // groups = groups[0];
  const groups = "";

  return (
    <>
      <Router>
        <div className="bg-white">
          <NavBar authenticated={authenticated} groups={groups} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/Summary" element={<Summary />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Filter" element={<Filter />}></Route>
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
            <Route
              path="/SupervisedAnalysis"
              element={<SupervisedAnalysis />}
            ></Route>
            <Route
              path="/UnsupervisedAnalysis"
              element={<UnsupervisedAnalysis />}
            ></Route>
            <Route path="/Logout" element={<Logout />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
      <CookieFooter />
      <Footer />
    </>
  );
}

export default App;
