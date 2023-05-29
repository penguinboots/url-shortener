import logo from "../assets/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="main-nav">
      <div className="nav-left">
        <img src={logo} className="logo" />
        <ul className="nav-menu-items">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <ul className="auth-items">
          <li>
            <a href="#" className="btn-login">Login</a>
          </li>
          <li>
            <button className="btn-signup btn-main">Sign Up</button>
          </li>
        </ul>
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
    </nav>
  );
}
