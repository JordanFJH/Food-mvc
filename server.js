require("dotenv").config();
const mongoConfig = require("./config");
const express = require("express");
const app = express();
const PORT = 5000;
const methodOverride = require("method-override");

// Bring in router
const fruitRoutes = require("./routes/fruitRoutes")
const veggieRoutes = require("./routes/vegetableRoutes")

const jsxEngine = require("jsx-view-engine")


// NOT MIDDLEWARE apparently
// But something called configuration
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());


//THIS is Middleware
//Format our POST request data
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.use("/fruits", fruitRoutes)
app.use("/vegetables", veggieRoutes)


app.get("/", (req, res) => {
    res.send("Yo diggy dog")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`, process.env.MONGO_URL);
    mongoConfig();
})