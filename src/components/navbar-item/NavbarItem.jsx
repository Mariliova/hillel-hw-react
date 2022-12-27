import React from "react";
import "./NavbarItem.css";

function NavbarItem({text}) {
  return (
    <li className="navbar__item">
      <a className="navbar__link" href="./">
        {text}
      </a>
    </li>
  );
}

export default NavbarItem;
