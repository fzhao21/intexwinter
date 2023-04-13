import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

function AdminLink({ groups }) {
  if (groups === "admin") {
    return <Nav.Link href="/Admin">Admin</Nav.Link>;
  }
}

export default AdminLink;