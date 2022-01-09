import express from "express";
import { booksRouter } from "./routes/books.router.js";

export const restRouter = express.Router();
restRouter.use("/book", booksRouter);
