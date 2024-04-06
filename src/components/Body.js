import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          class="h-12 px-5 text-black transition-colors duration-150 border border-black focus:shadow-outline hover:bg-black hover:text-white rounded-r"
          onClick={() => {
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
            <BookCard productData={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
