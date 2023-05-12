// const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let books = [];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  let { title, author, publishedDate } = req.body;

  if (!title || !author) {
    res.status(400).end("Title and author are required.");
  } else {
    let id = uuidv4();

    let newBook = { id, title, author, publishedDate };

    books.push(newBook);
    res.status(201).end();
  }
});

app.delete("/books/:id", (req, res) => {
  let bookID = req.params.id;
  let bookIndex = books.findIndex((book) => book.id == bookID);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.json({ msg: "Book deleted successfully" });
  } else {
    res.status(404).json({ msg: "Books not found" });
  }
  res.json(books);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server run @${PORT}`);
});
