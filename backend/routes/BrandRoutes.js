const express = require("express")
const authController = require("../controllers/Auth")
const brandController = require("../controllers/Brand")
const {isAdmin} = require("../middleware/AdminVerification")
const router = express.Router()

router.get("/",brandController.getAllBrands);
router.post("/create",authController.checkAuth ,isAdmin , brandController.createBrand)

module.exports = router