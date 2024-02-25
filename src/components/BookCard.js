import { IMAGE_CDN } from "../../utils/constants";

export default BookCard = (props) => {
  const { booksData } = props;
  const { title, authors, price, pageCount, thumbnailId } = booksData;
  return (
    <div className="margin-btm-10">
      <div className="book-card margin-btm-4">
        <img
          className="book-card-image "
          alt="book-card-logo"
          src={IMAGE_CDN + thumbnailId}
        />
      </div>
      <div className="details-container">
        <div className="book-name margin-btm-4">{title}</div>
        <div className="author-name margin-btm-4">
          {authors ? authors.join("") : "Unknown"}
        </div>
        <div className="book-cost margin-btm-4">
          <span>&#8377;</span> {price}
        </div>
        <div className="book-rating">{pageCount}</div>
      </div>
      <button className="blue-btn">Buy Now</button>
    </div>
  );
};
