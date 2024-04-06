import { IMAGE_CDN } from "../../utils/constants";
import { Button } from "antd";

export default BookCard = (props) => {
  const { productData } = props;
  const { name, description, price, category, thumbnailId } = productData;
  return (
    <div className="m-4 p-2 w-[270px] gap-2 rounded-lg bg-slate-50 hover:bg-slate-200 shadow-md">
      <div
        className="rounded-lg overflow-hidden"
        style={{ width: "100%", height: "300px" }}
      >
        <img
          className="rounded-lg h-80 w-full object-cover object-top"
          src={IMAGE_CDN + thumbnailId}
          alt="book-card-logo"
        />
      </div>
      <div className="book-details">
        <div className="font-semibold py-4">{name}</div>
        <div className="font-serif py-2">
          <h1 className="font-bold">Description:</h1>
          {description.split(" ").slice(0, 10).join(" ") + ".." || "Unknown"}
        </div>
        <div className="book-price">&#8377; {price}</div>
        <div className="book-category">
          <h1>Category: {category}</h1>
        </div>
        <Button type="primary">Buy Now</Button>
      </div>
    </div>
  );
};
