const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 8000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})