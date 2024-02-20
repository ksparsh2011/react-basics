import express, { Request, Response } from "express";
const router = express.Router();

// Mock data
const books = [
  {
    id: 2,
    Genre: "Action & Adventure",
    Name: "The Hidden Hindu Book 2",
    ImageId: "81gUMXfYcVL._AC_UY218_.jpg",
    Author: "Akshat Gupta",
    Price: 220,
    Rating: 4.3,
  },
  {
    id: 3,
    Genre: "Classic Fiction",
    Name: "Sherlock Homes",
    ImageId: "71YXYFviUmL._AC_UY327_FMwebp_QL65_.jpg",
    Author: "Sir Arthur Conan Doyle",
    Price: 169,
    Rating: 4.8,
  },
  {
    id: 4,
    Genre: "Crime Thriller",
    Name: "Angels and Demons",
    ImageId: "71U17PxlH7L._AC_UY218_.jpg",
    Author: "Dan Brown",
    Price: 324,
    Rating: 4.9,
  },
  {
    id: 5,
    Genre: "Humor",
    Name: "Coffe Table Book",
    ImageId: "61zIOr4x3zL._AC_UY327_FMwebp_QL65_.jpg",
    Author: "Usha Laxman",
    Price: 120,
    Rating: 3.8,
  },
  {
    id: 6,
    Genre: "Mythical",
    Name: "The Lord of the rings",
    ImageId: "71pZk3VdFAL._AC_UY327_QL65_.jpg",
    Author: "J R.R. Tolkein",
    Price: 1200,
    Rating: 4.9,
  },
  {
    id: 7,
    Genre: "Literature and Fiction",
    Name: "The monk who sold Ferrari",
    ImageId: "51bmAi4DCML.jpg",
    Author: "Robin Sharma",
    Price: 169,
    Rating: 4.0,
  },
];

// Endpoint to get all books
router.get("/getBooks", (req: Request, res: Response) => {
  res.json(books);
});

export default router;
