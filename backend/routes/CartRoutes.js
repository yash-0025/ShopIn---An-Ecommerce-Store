const express = require("express")
const router = express.Router()
const cartController = require("../controllers/Cart")


router.post("/", cartController.createCart)
router.get("/user/:id", cartController.getCartByUserId)
router.patch("/:id", cartController.updateCartById)
router.delete("/:id", cartController.deleteCartById)
router.delete("/user/:id", cartController.deleteCartByUserId)

module.exports = router