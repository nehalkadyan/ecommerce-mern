const mongoose = require("mongoose");
const errorHandler = require("../utils/error");

const shoeCollection = mongoose.connection.collection("products");

module.exports.listProducts = async (req, res, next) => {
  try {
    const shoes = await shoeCollection.find({}).toArray();
    res.json(shoes);
  } catch (error) {
    next(errorHandler(404, "Not Found"));
    console.log("Error fetching shoes data");
  }
};
