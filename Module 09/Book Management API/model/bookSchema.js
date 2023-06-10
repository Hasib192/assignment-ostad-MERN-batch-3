const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    publishedYear: Number,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("book", bookSchema);
