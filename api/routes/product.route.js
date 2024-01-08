const express = require("express");
const { listProducts } = require("../controllers/product.controller");

const router = express.Router();

router.get("/shoes", listProducts);

module.exports = router;
