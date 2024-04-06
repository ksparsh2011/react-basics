import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
  return (
    <div className="flex justify-between bg-black mb-2 shadow-lg">
      <div className="w-56 p-4 m-4 text-white">
        <Link to="/">Aesthetic Abode</Link>
      </div>
      <nav className="navigation items-center">
        <ul className="flex p-4 m-4 text-white">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <a href="#">Books</a>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons p-4 m-4 text-white items-center">
        <button className="login-btn px-4">Login</button>
        <button className="signup-btn px-4">Sign Up</button>
        <button className="cta-btn px-4">Shop Now</button>
      </div>
    </div>
  );
};
