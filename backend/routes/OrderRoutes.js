const express = requier("express")
const orderController = require("../controllers/Order")
const router = express.Router()

router.port("/", orderController.createOrder)
router.get("/",orderController.getAllOrder)
router.get("/user/:id", orderController.getOrderByUserId)
router.patch("/:id", orderController.updateOrderById)