import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAuthenticated(true);
    console.log(authenticated);
  }, [authenticated]);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const user = await Auth.signIn(username, password);
      console.log("User signed in", user);
      setUser(user);
      setAuthenticated(true);
    } catch (error) {
      console.log("Sign in error:", error);
    }
  }
  console.log(authenticated);

  if (authenticated === true) {
    return (
      <>
        <Navbar user={user} authenticated={authenticated} />
        <Home authenticated={authenticated} />
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <p>
        Don't have an account? <Link to="/Signup">Sign up here</Link>.
      </p>
    </>
  );
}

export default Login;
