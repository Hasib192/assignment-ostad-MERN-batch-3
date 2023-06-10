const router = require("express").Router();
const upload = require("multer")();
const { getAllProucts, createProducts } = require("../controllers/product");

router.post("/products", upload.none(), createProducts);
router.get("/products", getAllProucts);

module.exports = router;
