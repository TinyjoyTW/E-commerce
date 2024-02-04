import React from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} />
      <h1>Tiny store</h1>
    </nav>
  );
}
