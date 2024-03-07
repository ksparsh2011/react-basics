import { useEffect } from "react";

const BookDetailPage = () => {
  useEffect(() => {
    fetchBookDetail();
  }, []);

  const fetchBookDetail = async () => {
    const data = await fetch("http://localhost:3000/api/getBooks");
    const json = await data.json();
  };

  return (
    <div className="book-detail">
      <h1>Book Title</h1>
      <h2>Authors</h2>
    </div>
  );
};

export default BookDetailPage;
