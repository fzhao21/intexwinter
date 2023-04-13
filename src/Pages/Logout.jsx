import { React, useState } from "react";
import { Auth } from "aws-amplify";
import Home from "./Home";
import Navbar from "../components/Navbar";

function SignoutButton({ user, authenticated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);
  const handleSignout = async () => {
    try {
      await Auth.signOut();
      console.log("User signed out");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error signing out user:", error);
    }
  };

  console.log(isAuthenticated);
  if (isAuthenticated === false) {
    return (
      <>
        console.log(authenticated)
        <Navbar user={user} authenticated={isAuthenticated} />
        {/* <Home /> */}
      </>
    );
  }

  return <button onClick={handleSignout}>Sign Out</button>;
}

export default SignoutButton;
