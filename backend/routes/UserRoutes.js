const express = require("express")
const router = express.Router()
const userController = require('../controllers/User')


router.get("/:id",userController.getById)
router.patch("/:id",userController.updateById)


module.exports = router