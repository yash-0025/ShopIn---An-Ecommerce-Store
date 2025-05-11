const express = require("express")
const productController = require("../controllers/Product")
const router = express.Router()

router.post("/",productController.createProduct)
router.get("/",productController.getAll);
router.get("/:id", productController.getProductById)
router.patch("/:id",productController.updateProductById);
router.delete("/:id",productController.deleteProductById)
router.patch("/undelete/:id", productController.undeleteProductById)

module.exports = router

