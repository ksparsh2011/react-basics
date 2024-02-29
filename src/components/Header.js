import { LOGO_URL } from "../../utils/constants";

export default Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Pages &amp; Verses</div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
