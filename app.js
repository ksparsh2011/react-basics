import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i0.wp.com/therumzzline.com/wp-content/uploads/2022/11/Asset-1.png?resize=1328%2C700&ssl=1"
        />
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
  );
};

const BookCard = () => {
  return (
    <div className="book-card">
      <img
        className="book-card-image"
        alt="book-card-logo"
        src="https://marketing.prowritingaid.com/a-desolation-called-peace-book.jpg"
      />
      <h3>Fiction</h3>
      <h4>4.3 stars</h4>
      <h4> Buy </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">searchBar</div>
      <div className="res-container">
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
