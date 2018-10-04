var express = require("express");
var bodyParser = require("body-parser");
var app = express();

/*process.env.PORT lets the port be set by Heorku*/
var PORT =process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "home"}));
app.set("view engine", "handlebars");

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });