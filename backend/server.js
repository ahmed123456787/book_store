const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/books", bookRoute);
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
mongoose.connect("mongodb://localhost:27017/book-store").then((_) => {
  console.log("database connection sucess");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
