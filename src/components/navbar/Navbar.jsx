import React from "react";
import NavbarItem from "../navbar-item/NavbarItem";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavbarItem text="Home" />
        <NavbarItem text="Features" />
        <NavbarItem text="Pricing" />
        <NavbarItem text="Blog" />
      </ul>
    </nav>
  );
}

export default Navbar;
