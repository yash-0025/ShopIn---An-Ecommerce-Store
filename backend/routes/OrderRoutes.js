const express = require("express")
const orderController = require("../controllers/Order")
const router = express.Router()

router.post("/", orderController.createOrder)
router.get("/",orderController.getAllOrder)
router.get("/user/:id", orderController.getOrderByUserId)
router.patch("/:id", orderController.updateOrderById)


module.exports = router