import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    isbn: {
      type: Number,
    },
    price: {
      type: Number,
    },
    isDelete: {
      type: Boolean,
    },
  },

  // if remove below line it will take books as bydefault collection in database
  { collection: "book" }
);

export default mongoose.model("Book", BookSchema);
