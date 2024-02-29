const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@pagesandverses.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p>
            <a href="#">Terms of Service</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pages and Verses. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
