import React from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container container--flex">
        <Logo />
        <Navbar />
        <Button text="Get Started" className="button--orange" />
      </div>
    </header>
  );
}

export default Header;
