const express = require("express");
const router = express.Router();
const vegController = require("../controllers/vegetableController")


// Index
router.get("/", vegController.veggieIndex)

// New
router.get("/new", vegController.veggieNew)

// Create
router.post("/", vegController.veggieCreate)

//Show
router.get("/:index", vegController.veggieShow)

// Delete
router.delete("/:index", vegController.veggieDelete)

module.exports = router;