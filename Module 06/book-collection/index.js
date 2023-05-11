const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("For office works couldn't complete the assingment on time. Assingment will be submit by Friday");
});

app.listen(PORT, () => {
  console.log(`Server run @${PORT}`);
});
