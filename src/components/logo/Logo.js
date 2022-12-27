import React from "react";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <div>
      <a href="./">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
