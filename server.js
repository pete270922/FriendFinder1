var express = require("express");
var app = express();

/*process.env.PORT lets the port be set by Heorku*/
var PORT =process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "home"}));
app.set("view engine", "handlebars");

/*Connection*/


/*Routes*/
app.get("/public1/home.html", function(req, res){
    <h1>Front page of the FriendFinder1 app</h1>
     /*Insert form to enter name and age*/
    /*Insert buttom to change pages into survey*/
    
});


app.post("/public1/survey.html", function(req, res){
    /*Enter survey*/
    //req.body.task

    /*Post results of survey*/
    res.render("home", {})
})

app.listen(PORT, function(){
    console.log("server listening on: http:localhsot:" + PORT);
});
/*newPerson object*/
var newPerson = {};

