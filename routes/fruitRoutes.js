const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruitController")


// Index Route
router.get("/", fruitController.fruitIndex)

// New Route
router.get("/new", fruitController.newFruit)

// Create Route
router.post("/", fruitController.createFruit)

// Show Route
router.get("/:index", fruitController.fruitShow)

// Edit Route
router.get("/:index/edit", fruitController.fruitEdit)

// Update Route
router.put("/:index", fruitController.fruitUpdate)

// Destroy Route
router.delete('/:index', fruitController.fruitDelete)

module.exports = router