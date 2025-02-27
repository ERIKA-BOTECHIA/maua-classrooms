"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksControllers_1 = require("./../../controllers/api/booksControllers");
const router = (0, express_1.Router)();
router.post("/create", booksControllers_1.BooksController.createBook);
router.get("/", booksControllers_1.BooksController.getBooks);
router.get("/:id", booksControllers_1.BooksController.getBookById);
router.put("/:id", booksControllers_1.BooksController.updateBook);
router.delete("/:id", booksControllers_1.BooksController.deleteBook);
exports.default = router;
//# sourceMappingURL=booksRouter.js.map