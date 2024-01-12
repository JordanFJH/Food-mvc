const vegetables = require('../models/vegetables');

// Index Route
const veggieIndex = (req, res) => {
    res.render("vegetables/Index", { vegetables: vegetables })
}

//New Route
const veggieNew = (req, res) => {
    res.render("vegetables/New")
}

const veggieShow = (req, res) => {
    res.render("vegetables/Show", { vegetable: vegetables[req.params.index], index: req.params.index })
}

const veggieCreate = (req, res) => {
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false
    vegetables.push(req.body)
    res.redirect("/vegetables")
}

const veggieDelete = (req, res) => {
    vegetables.splice(req.params.index, 1);
    res.redirect("/vegetables");
}

module.exports = {
    veggieIndex,
    veggieCreate,
    veggieNew,
    veggieShow,
    veggieDelete
}