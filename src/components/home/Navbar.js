import React from "react";
import { Search } from "../../assets/Svg";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-form">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <div className="navbar-inp">
              <input type="text" placeholder="Search anything" />
              <Search />
            </div>
            <button>Help</button>
          </div>
        </div>
        <nav>
          <ul>
            <li>Furniture</li>
            <li>Lamination</li>
            <li>About our company</li>
            <li>Home page</li>
            <li>Contacts</li>
            <li>All Production</li>
            <li>Terms and Conditions</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
