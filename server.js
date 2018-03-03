// Requiring in the necessary node packages
var express = require("express");
var bodyParser = require("body-parser");

// Initializing express and establishing the port the listener will use
var app = express();
var PORT = process.env.PORT || 3000;

// Establishing the bodyparser middleware to help parse json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Functions to handle the different routes selected
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});