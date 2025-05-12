const express = require("express")
const addressController = require("../controllers/Address")
const router = express.Router()

router.post("/", addressController.createAddress)
router.get("/user/:id", addressController.getAddressByUserId)
router.patch("/:id",addressController.updateAddressById)
router.delete("/:id", addressController.deleteAddressById)