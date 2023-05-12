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
    res.status(400).send("Title and author are required.");
  }

  let id = uuidv4();

  let newBook = { id, title, author, publishedDate };

  books.push(newBook);
  res.status(201).end();
});

app.listen(PORT, () => {
  console.log(`Server run @${PORT}`);
});
