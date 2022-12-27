import React from "react";
import Logo from "../logo/Logo";
import NavbarItem from "../navbar-item/NavbarItem";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container container--flex">
        <Logo />
        <nav>
          <ul>
            <NavbarItem text="Support" />
            <NavbarItem text="Premium" />
            <NavbarItem text="Pricing" />
            <NavbarItem text="Blog" />
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
