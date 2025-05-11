const express= require('express')
const router = express.Router()
const authController = require("../controllers/Auth")
const {verifyToken} = require("../middleware/TokenVerification")

router.post("/signup", authController.signup);
router.post("/login",authController.login);

module.exports = router