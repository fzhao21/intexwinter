import React, { useState } from "react";
import { Auth } from "aws-amplify";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  async function handleSignup(event) {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("User signed up", newUser);

      setSignupSuccess(true);
    } catch (error) {
      console.log("Sign up error:", error);
    }
  }

  async function handleVerification(event) {
    event.preventDefault();

    try {
      // Confirm user's email address
      await Auth.confirmSignUp(email, verificationCode);

      alert("User successfully created!");
    } catch (error) {
      console.log("Verification error:", error);
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      {signupSuccess ? (
        <form onSubmit={handleVerification}>
          <label>
            Verification code:
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Verify</button>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Sign up</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
