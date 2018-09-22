const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    PORT = process.env.PORT || 8080,
    app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let exphbs = require("express-handlebars");

app.use(express.static(path.join(__dirname, "js")));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});