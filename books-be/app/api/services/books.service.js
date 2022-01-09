import book from "../models/book.js";

export default {
  getBooks() {
    let books = book.find({});
    return books;
  },
  createBook(newBook) {
    let newBoo = new book(newBook);
    newBoo.save();
  },
};
