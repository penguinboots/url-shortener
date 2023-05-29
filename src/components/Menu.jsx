import PropTypes from "prop-types";

export default function Menu(props) {
  const { isOpen } = props;
  Menu.propTypes = {
    isOpen: PropTypes.bool,
  };
  return (
    <div className={isOpen ? "menu-window menu-window-active" : "menu-window menu-window-inactive"}>
      <ul className="menu-items">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <hr />
        <li>
          <a href="#" className="btn-login">
            Login
          </a>
        </li>
        <li>
          <button className="btn-signup btn-main">Sign Up</button>
        </li>
      </ul>
    </div>
  );
}
