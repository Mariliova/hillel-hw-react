import React from "react";
import "./NavbarItem.css";

function NavbarItem(props) {
  return (
    <li className="navbar__item">
      <a className="navbar__link" href="./">
        {props.text}
      </a>
    </li>
  );
}

export default NavbarItem;
