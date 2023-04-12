import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

function AdminLink({ groups }) {
  if (groups === "admin") {
    console.log(groups);
    return <Nav.Link href="/Admin">Admin</Nav.Link>;
  }
}

export default AdminLink;
