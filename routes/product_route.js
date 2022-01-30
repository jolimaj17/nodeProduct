const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product_controller");

router.get("/", ProductController.index);
router.post("/product/create", ProductController.create);
router.put("/product/update/:id", ProductController.update);
router.delete('/product/delete/(:id)', ProductController.deletes);

module.exports = router;