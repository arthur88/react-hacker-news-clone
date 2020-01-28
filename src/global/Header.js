import React from "react";
import { NavLink } from "react-router-dom";

const Header =() => (
  
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg_orange">
      <a href="#" className="navbar-brand">Hacker news clone</a>

      <div className="navbar-expand" id="navbar_hackerclone">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/news" className="nav-link">News</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
  </header>
)

export default Header;