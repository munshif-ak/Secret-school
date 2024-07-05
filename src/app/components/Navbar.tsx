import React from "react";
import Link from "next/link";
import "../Styles/navBar.css";
import ModerDrawer from "./ModerDrawer";

function Navbar() {
  const nanLinks = [
    { name: "Home", path: "/pages/Home" },
    { name: "About", path: "/pages/about" },
    { name: "Service", path: "/pages/service" },
    { name: "Experts", path: "/pages/expert" },
    { name: "Contact", path: "/pages/contact" },
  ];
  return (
    <div>
      <div className="navBar-container">
        <Link href={"/"}>
          <img
            src="https://www.secretschool.in/assets/images/logo.png"
            width={170}
            height={56}
          />
        </Link>
        <div className="Nav-links-container">
          <div className="nav-links2">
            {nanLinks.map((links) => (
              <Link href={links.path} className="nav-links">
                {links.name}
              </Link>
            ))}
          </div>
          <button className="Nav-button">Get in Touch</button>
          <div className="nav-drawer">
            <ModerDrawer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
