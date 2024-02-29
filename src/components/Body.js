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
    const data = await fetch("http://localhost:3000/api/getBooks");

    const json = await data.json();
    setListOfBooks(json);
    setFilteredbooks(json);
  };
  return (
    <div className="body">
      <div className="sub-header">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfBooks(filteredBooks.filter((book) => book.Rating > 4.5));
          }}
        >
          Top Rated Books
        </button>
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
                book.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredbooks(filteredBooks);
            }}
          >
            🔍
          </i>
        </div>
      </div>
      <div className="res-container">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} booksData={book} />
        ))}
      </div>
    </div>
  );
};
