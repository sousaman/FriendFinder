// Requiring node packages needed
// Path is used to concatenate current directory and the path to the file being used
var path = require("path");

// Line of code that handles the html routes or any invalid paths entered
module.exports = function(app) {
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };