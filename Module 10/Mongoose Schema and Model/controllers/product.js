const Product = require("../model/Product");
const { generateToken } = require("../helpers/jwt-token-helper");

exports.getAllProucts = async (req, res) => {
  try {
    // Using projection
    let products = await Product.find(
      {},
      {
        name: 1,
        price: 1,
        _id: 0,
      }
    );
    // OR
    // let products = await Product.find({}).select("name price");
    if (products.length < 0) {
      res.json("No products in record");
    }
    res.staus(200).json({ status: "Success", data: products });
  } catch (error) {
    res.status(200).json({ status: "Fail", data: error });
  }
};

exports.createProducts = async (req, res) => {
  const { name, price, description } = req.body || {};
  try {
    if (!name) {
      return res.status(200).json("Name required");
    }
    if (!price || isNaN(price)) {
      return res.status(200).json("Price is not a number");
    }
    const result = await new Product({
      name,
      price,
      description,
    }).save();

    const token = generateToken(result._id);

    res.status(201).json({
      status: "Success",
      data: result,
      token,
    });
  } catch (error) {
    res.status(200).json({ status: "Fail", data: error });
  }
};
