import express from "express";
import booksController from "../controllers/books.controller.js";

export const booksRouter = express.Router();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.get("/:id", booksController.getBook);
booksRouter.put("/:id", booksController.updateBook);

booksRouter.post("/", booksController.createBook);
booksRouter.delete("/:id", booksController.deleteBook);
