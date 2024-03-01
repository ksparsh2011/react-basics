import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Pages &amp; Verses</div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
          <button className="cta-btn">Shop Now</button>
        </div>
      </div>
    </header>
  );
};
