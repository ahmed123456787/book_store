const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  trending: {
    type: Boolean,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  oldPrice: Number,
  newPricde: Number,
  createdAt: {
    type: Date,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
