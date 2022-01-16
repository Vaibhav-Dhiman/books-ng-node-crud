import bookService from "../services/books.service.js";
import { StatusCodes } from "http-status-codes";

export default {
  async getAllBooks(req, res) {
    try {
      const books = await bookService.getBooks();
      if (books.length == 0)
        return res.status(StatusCodes.NOT_FOUND).json("Create A Book");
      return res.json(books);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async getBook(req, res) {
    try {
      const books = await bookService.getBook(req.params.id);
      if (!books)
        return res.status(StatusCodes.NOT_FOUND).json("Book Not Found");
      return res.json(books);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async createBook(req, res) {
    try {
      const book = await bookService.createBook(req.body);
      return res.json(book);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  },

  async updateBook(req, res) {
    const { id } = req.params;
    const resp = await bookService.updateBook(id, req.body);
    return res.json(resp);
  },

  async deleteBook(req, res) {
    const resp = await bookService.deleteBook(req.params.id);
    return res.json("Book Deleted");
  },
};
