import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="./images/tesla.svg" alt="teslalogo" className="h-6" />
      <div className="hidden lg:block">
        <NavLink to="/" className="nav_link">
          Model S
        </NavLink>
        <NavLink to="/model3" className="nav_link">
          Model 3
        </NavLink>
        <NavLink to="/modelX" className="nav_link">
          Model X
        </NavLink>
        <NavLink to="/modelY" className="nav_link">
          Model Y
        </NavLink>
        <NavLink to="/solarRoof" className="nav_link">
          Solar Roof
        </NavLink>
        <NavLink to="/solarPanels" className="nav_link">
          Solar Panels
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <NavLink to="/shop" className="nav_link">
          Shop
        </NavLink>
        <NavLink to="/account" className="nav_link">
          Account
        </NavLink>
        <NavLink to="/menu" className="nav_link">
          Menu
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
