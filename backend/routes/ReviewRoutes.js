const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/Review")


router.post("/", reviewController.createReview)
router.get("/product/:id", reviewController.getReviewByProductId)
router.patch("/:id", reviewController.updateReviewById)
router.delete("/:id",reviewController.deleteReviewById)



module.exports = router

