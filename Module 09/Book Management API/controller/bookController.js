const bookModel = require("../model/bookSchema");

exports.createBook = async (req, res) => {
  const { title, author, description, publishedYear } = req.body;
  if (title.length == 0) {
    res.status(400).send("Title is required");
  }
  if (author.length == 0) {
    res.status(400).send("Author name is required");
  }
  const saveBook = new bookModel({
    title,
    author,
    description,
    publishedYear,
  });
  saveBook
    .save()
    .then(() => {
      res.status(201).json({
        msg: "Book Saved",
        data: saveBook,
      });
    })
    .catch((error) => {
      res.status(500).json({
        msg: "Error. Please try again later",
        error: error.message,
      });
    });
};

exports.getAllBooks = async (req, res) => {
  try {
    const result = await bookModel.find(
      {},
      {
        createdAt: 0,
        updatedAt: 0,
      }
    );
    if (!result) {
      return res.status(404).json({
        error: "No book found",
      });
    }
    res.status(200).json({
      msg: "All Book List",
      result,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error. Please try again later",
      error: error.message,
    });
  }
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await bookModel.findById(id);
    if (!result) {
      return res.status(404).json({
        error: "No book found",
      });
    }
    res.status(200).json({
      msg: "More about this book",
      result,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error. Please try again later",
      error: error.message,
    });
  }
};

exports.updateBookById = async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const result = await bookModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (result) {
      res.status(200).json({
        msg: "Successfully updated",
        result,
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Error. Please try again later",
      error: error.message,
    });
  }
};

exports.deleteBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await bookModel.findByIdAndDelete(id);
    if (result) {
      res.status(204).json({
        msg: "Successfully deleted",
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: "Error. Please try again later",
      error: error.message,
    });
  }
};
