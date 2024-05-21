import BookCard, { withPromotedLabel } from "./BookCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredbooks] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(BookCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/products");
    const json = await response.json();
    // Combine products from different categories into a single list
    // This step flattens the nested itemCards arrays into one array
    const allProducts = json.data.flatMap(
      (category) => category.card.itemCards
    );
    console.log(allProducts);
    setListOfBooks(allProducts);
    setFilteredbooks(allProducts);
  };

  return (
    <div className="body">
      <div className="search-container mx-80 my-6 p-4 flex content-center rounded-l">
        <input
          type="text"
          className="search-input border border-solid border-black"
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="h-12 px-5 text-black transition-colors duration-150 border border-black focus:shadow-outline hover:bg-black hover:text-white rounded-r"
          onClick={() => {
            // Filter books based on search text
            const filteredBooks = listOfBooks.filter((book) =>
              book.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredbooks(filteredBooks);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredBooks.map((product) => (
          <Link key={product._id} to={"/products/" + product._id}>
            {product.isPromoted ? (
              <RestaurantCardPromoted productData={product} />
            ) : (
              <BookCard productData={product} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
