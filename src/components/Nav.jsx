import logo from "../assets/logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import PropTypes from 'prop-types';

export default function Nav(props) {
  Nav.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
  }

  const { isOpen, toggleMenu } = props;

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
