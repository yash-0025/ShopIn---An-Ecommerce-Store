const express = require("express")
const categoryController = require("../controllers/Category")
const router = express.Router()

router.get("/",categoryController.getAllCategory)

module.exports = router