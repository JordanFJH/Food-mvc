const fruits = require("../models/fruits")

// Index
const fruitIndex = (req, res) => {
    res.render("fruits/Index", { fruits: fruits })
}

// New Route
const newFruit = (req, res) => {
    res.render("New")
}

// Create Route
const createFruit = (req, res) => {
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    fruits.push(req.body)
    res.redirect("/fruits")
}

// Show Route
const fruitShow = (req, res) => {
    res.render(`fruits/Show`, {fruit: fruits[req.params.index], index: req.params.index}) // Passing data to view
}

// Edit Route
const fruitEdit = (req, res) => {
    res.render("fruits/Edit", { fruit: fruits[req.params.index], index: req.params.index })
}

// Update Route
const fruitUpdate = (req, res) => {
    console.log("Updated the fruit")
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false;
    fruits[req.params.index] = req.body;
    res.redirect(`/fruits/${req.params.index}`)
}

// Destroy Route
const fruitDelete = (req, res) => {
    fruits.splice(req.params.index, 1)
    res.redirect("/fruits")
}

module.exports = {
    fruitDelete,
    fruitEdit,
    fruitIndex,
    fruitShow,
    fruitUpdate,
    createFruit,
    newFruit
}