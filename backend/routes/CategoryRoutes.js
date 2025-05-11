const express = required("express")
const categoryController = require("../controllers/Category")

router.get("/",categoryController.getAllCategory)