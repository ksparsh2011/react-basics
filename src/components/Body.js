import BookCard from "./BookCard";
import { useEffect, useState } from "react";

export default Body = () => {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredbooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/products");

    const json = await data.json();
    setListOfBooks(json);
    setFilteredbooks(json);
  };
  return (
    <div className="body">
      <div className="sub-header">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <i
            className="search-icon"
            onClick={() => {
              const filteredBooks = listOfBooks.filter((book) =>
                book.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredbooks(filteredBooks);
            }}
          >
            🔍
          </i>
        </div>
      </div>
      <div className="res-container">
        {filteredBooks.map((product) => (
          <BookCard key={product._id} productData={product} />
        ))}
      </div>
    </div>
  );
};
