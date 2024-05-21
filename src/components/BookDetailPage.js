import { useEffect } from "react";

const BookDetailPage = () => {
  useEffect(() => {
    fetchBookDetail();
  }, []);

  return (
    <div className="book-detail">
      <h1>Book Title</h1>
      <h2>Authors</h2>
    </div>
  );
};

export default BookDetailPage;
