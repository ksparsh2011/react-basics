import { IMAGE_CDN } from "../../utils/constants";

export default BookCard = (props) => {
  const { booksData } = props;
  const { Name, Author, Price, Rating, ImageId } = booksData;
  return (
    <div className="margin-btm-10">
    <div className="book-card margin-btm-4">
      <img
        className="book-card-image "
        alt="book-card-logo"
        src={IMAGE_CDN + ImageId}
      />
      </div>
      <div className="details-container">
      <div className="book-name margin-btm-4">{Name}</div>
      <div className="author-name margin-btm-4">{Author?Author:'Unknown'}</div>
      <div className="book-cost margin-btm-4"><span>&#8377;</span> {Price}</div>
      <div className="book-rating">{Rating}</div>
      </div>
      <button className="blue-btn">Buy Now</button>
      </div>
   
  );
};
