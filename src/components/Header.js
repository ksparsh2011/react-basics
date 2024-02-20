import { LOGO_URL } from "../../utils/constants";

export default Header = () => {
  return (
    <div>
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Shopping Cart</li>
        </ul>
      </div>
    </div>
    <div className="sub-header">
    <div class="search-container">
    <input type="text" class="search-input" placeholder="Search..."></input>
    <i class="search-icon">🔍</i>
    </div>
    </div>
    </div>

  );
};
