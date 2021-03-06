var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routes = require("./routes/routes");


mongoose.Promise = Promise;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE");
  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.use(express.static("build"));
app.use("/", routes);

mongoose.connect("mongodb://heroku_gv3t390c:a04a80d05c91ifu57dd7n09sks@ds123534.mlab.com:23534/heroku_gv3t390c");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// require("./routes/api-routes.js")(app);

var PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("App running on "+PORT);
});

module.exports = PORT