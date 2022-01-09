import bookService from "../services/books.service.js";

export default {
  async getAllBooks(req, res) {
    const books = await bookService.getBooks();
    return res.json(books);
  },
  async createBook(req, res) {
    const book = await bookService.createBook(req.body);
    return res.json(book);
  },
};
