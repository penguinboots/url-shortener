import logo from "../assets/logo.svg";

export default function Nav() {
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
    </nav>
  );
}
