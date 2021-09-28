const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 8000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.render("home")
});
app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", (req, res) => {
    console.log(`username : ${req.body.username}, password : ${req.body.password}`)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});