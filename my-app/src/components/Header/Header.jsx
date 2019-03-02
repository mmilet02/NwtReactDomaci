import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="http://localhost:3000/images/logo.png" alt="mirnovec" />
      </Link>
    </header>
  );
};

export default Header;
