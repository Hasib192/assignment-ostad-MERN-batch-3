const router = require("express").Router();
const bookController = require("../controller/bookController");

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/books", bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.put("/books/:id", bookController.updateBookById);
router.delete("/books/:id", bookController.deleteBookById);

module.exports = router;
