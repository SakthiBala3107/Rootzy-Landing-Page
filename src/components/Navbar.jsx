import React from "react";
import { navLinks } from "../constants/constants";

function Navbar() {
  return (
    <div className="nav-section">
      {/* LOOGO */}
      <div className="logo">
        <h3>Rootzy</h3>
        <img
          className="logo-pic"
          src="public/images/adam-gonzales-cfKwE7k9qqA-unsplash.jpg"
          alt="logo"
        />
      </div>

      {/* NAVBAR */}
      <nav id="navBar" className="font-negra ">
        {navLinks.map((link) => (
          <a key={link.id} className="nav-link" href={`#${link.title}`}>
            {link.title}
          </a>
        ))}
        {/* <h1 className="text-5xl lagistha">Rootzy</h1> */}
      </nav>
    </div>
  );
}

export default Navbar;
