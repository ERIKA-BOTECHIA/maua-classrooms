import { Router } from "express";
import { BooksController } from "./../../controllers/api/booksControllers"; // Corrected path

const router = Router();

router.post("/create", BooksController.createBook);
router.get("/", BooksController.getBooks);
router.get("/:id", BooksController.getBookById);
router.put("/:id", BooksController.updateBook);
router.delete("/:id", BooksController.deleteBook);

export default router;