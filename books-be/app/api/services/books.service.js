import Book from "../models/book.js";

export default {
  async getBooks() {
    let books = await Book.find({ isDelete: false });
    return books;
  },

  async getBook(id) {
    let data = await Book.findOne({ _id: id, isDelete: false });
    return data;
  },

  async createBook(newBook) {
    try {
      let newBoo = await new Book(newBook);
      newBoo.save();
      return newBook;
    } catch {
      return null;
    }
  },

  async updateBook(id, body) {
    let value = body;
    delete value._id;
    const data = await Book.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });
    return data;
  },

  async deleteBook(id) {
    let value = { isDelete: true };
    await Book.findOneAndUpdate({ _id: id, isDelete: false }, value, {
      new: true,
    });
  },
};
