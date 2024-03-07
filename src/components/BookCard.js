import { IMAGE_CDN } from "../../utils/constants";

export default BookCard = (props) => {
  const { productData } = props;
  const { name, description, price, category, thumbnailId } = productData;
  return (
    <div className="book-card-container">
      <div className="book-card-image-wrapper">
        <img
          className="book-card-image"
          src={IMAGE_CDN + thumbnailId}
          alt="book-card-logo"
        />
      </div>
      <div className="book-details">
        <div className="book-name">{name}</div>
        <div className="book-description">{description || "Unknown"}</div>
        <div className="book-price">&#8377; {price}</div>
        <div className="book-category">{category}</div>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};
