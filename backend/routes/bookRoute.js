const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBook,
} = require("./../controllers/bookController");

router.post("/book", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBook);
module.exports = router;
