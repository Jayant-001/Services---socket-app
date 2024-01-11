const express = require("express");
const path = require("path");
const ejs = require("ejs");
var expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Set the layout directory
app.use(express.static("public"));
app.use(expressLayouts);
app.set("views", path.resolve("./resources/views"));
// app.set("views", path.join(__dirname, "./resources/views"))
app.set("view engine", "ejs");
// app.set("layout", false);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/cart", (req, res) => {
    res.render("customers/cart");
});

app.listen(PORT, () => {
    console.log("Server is listening on PORT", PORT);
});
