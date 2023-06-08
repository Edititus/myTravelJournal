import React from "react";
import "./navbar.css";
import { BiWorld } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="navbar">
      <BiWorld size={30} />
      <h2 className="logo">my travel journal.</h2>
    </div>
  );
};

export default Navbar;
