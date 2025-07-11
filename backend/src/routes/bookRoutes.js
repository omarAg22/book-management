import expres from "express";
import {
  getAllBooks,
  createBook,
  getRecommendedBooks,
  deleteBook,
} from "../controllers/bookControllers.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = expres.Router();
//1.05
// Create a new book
router.post("/", protectRoute, createBook);

// Get all books with pagination
router.get("/", protectRoute, getAllBooks);

// Get recommended books for the logged-in user
router.get("/user", getRecommendedBooks);

// Delete a book by ID
router.delete("/:id", protectRoute, deleteBook);

export default router;
