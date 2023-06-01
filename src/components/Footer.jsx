import logo from "../assets/logo.svg";
import icon_fb from "../assets/icon-facebook.svg";
import icon_tw from "../assets/icon-twitter.svg";
import icon_pin from "../assets/icon-pinterest.svg";
import icon_in from "../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="logo">
        <img src={logo} className="logo" />
      </div>
      <nav className="footer-nav">
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="socials-container">
        <a href="#">
          <img src={icon_fb} />
        </a>
        <a href="#">
          <img src={icon_tw} />
        </a>
        <a href="#">
          <img src={icon_pin} />
        </a>
        <a href="#">
          <img src={icon_in} />
        </a>
      </div>
    </footer>
  );
}
