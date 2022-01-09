import express from "express";
import booksController from "../controllers/books.controller.js";

export const booksRouter = express.Router();
booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.createBook);
