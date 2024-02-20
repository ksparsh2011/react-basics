import BookCard from "./BookCard";
import { booksList } from "../../data";
import { useEffect, useState } from "react";

export default Body = () => {
  let [listOfBooks, setListOfBooks] = useState(booksList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/getBooks");

    const json = await data.json();
    setListOfBooks(json);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfBooks(listOfBooks.filter((book) => book.Rating > 4.5));
          }}
        >
          Top Rated Books
        </button>
      </div>
      <div className="res-container">
        {listOfBooks.map((book) => (
          <BookCard key={book.id} booksData={book} />
        ))}
      </div>
    </div>
  );
};
