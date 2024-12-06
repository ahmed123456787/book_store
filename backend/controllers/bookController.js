const Book = require("./../models/book");

const createBook = async (req, res) => {
  try {
    const newBook = await new Book({ ...req.body });
    await newBook.save();
    res.status(201).send({ message: "Book created", data: newBook });
  } catch (e) {
    console.log(e);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({
      message: "success",
      books: books,
    });
  } catch (e) {}
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const book = await Book.findById(id);
    res.status(200).send({ book: book });
    if (!book) {
    }
  } catch (e) {
    res.status(404).send({ message: "no book found" });
    console.log(e);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).send({ message: "not found" });
    }
    await book.save();
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

module.exports = { createBook, getAllBooks, getBook };
