import BookCard from "./BookCard";
import { useEffect, useState } from "react";

export default Body = () => {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/getBooks");

    const json = await data.json();
    setListOfBooks(json);
  };
  return (
    <div className="body">
      <div className="sub-header">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfBooks(listOfBooks.filter((book) => book.Rating > 4.5));
          }}
        >
          Top Rated Books
        </button>
        <div class="search-container">
          <input
            type="text"
            class="search-input"
            placeholder="Search..."
          ></input>
          <i class="search-icon">🔍</i>
        </div>
      </div>
      <div className="res-container">
        {listOfBooks.map((book) => (
          <BookCard key={book.id} booksData={book} />
        ))}
      </div>
    </div>
  );
};
