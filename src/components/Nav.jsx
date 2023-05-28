import logo from "../assets/logo.svg";
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";


export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <nav className="main-nav">
      <img src={logo} className="logo" />

      <div className="nav-left">
        <ul className="nav-menu-items">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="nav-right">
        <ul className="auth-items">
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>

      <Hamburger 
        toggled={isOpen}
        toggle={toggleMenu}/>
    </nav>
  );
}
