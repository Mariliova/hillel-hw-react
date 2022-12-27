import React from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import NavbarItem from "../navbar-item/NavbarItem";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container container--flex">
        <Logo />
       <nav>
      <ul>
        <NavbarItem text="Home" />
        <NavbarItem text="Features" />
        <NavbarItem text="Pricing" />
        <NavbarItem text="Blog" />
      </ul>
    </nav>
        <Button text="Get Started" className="button--orange" />
      </div>
    </header>
  );
}

export default Header;
