import { IMAGE_CDN } from "../../utils/constants";

export default BookCard = (props) => {
  const { booksData } = props;
  const { Name, Author, Price, Rating, ImageId } = booksData;
  return (
    <div className="book-card">
      <img
        className="book-card-image"
        alt="book-card-logo"
        src={IMAGE_CDN + ImageId}
      />
      <h3>{Name}</h3>
      <h4>{Author}</h4>
      <h4>{Price}</h4>
      <h4>{Rating} </h4>
    </div>
  );
};
