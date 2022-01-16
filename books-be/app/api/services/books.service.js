import book from "../models/book.js";

export default {
  getBooks() {
    let books = book.find({ isDelete: false });
    return books;
  },

  async getBook(id) {
    let data = await book.findOne({ _id: id, isDelete: false });
    return data;
  },

  createBook(newBook) {
    try {
      let newBoo = new book(newBook);
      newBoo.save();
      return newBook;
    } catch {
      return null;
    }
  },
  async deleteBook(id) {
    let value = { isDelete: true };
    await book.findOneAndUpdate({ _id: id, isDelete: false }, value, {
      new: true,
    });
  },
};
