const express = require("express")
const wishlistController = require("../controllers/Wishlist")
const router = express.Router()


router.post("/", wishlistController.createWishlist)
router.get("/user/:id", wishlistController.getWishlistByUserId)
router.patch("/:id", wishlistController.updateWishlistById)
router.delete("/:id", wishlistController.deleteWishlistById)


module.exports = router