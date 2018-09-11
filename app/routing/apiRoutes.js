
/*Load data*/
var friend1 = require("../data/friend");

/*Routing*/
module.exports  = function(app){

    app.get("/api/friend", function (req, res){
        res.json(friend1);
    });
    
    app.post("/api/friend", function(req, res){
        if (newUser == true ){
            surveySum.push(req.body);
            res.json(true);
        }
        else {

            surveySum.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function(req, res){
        surveySum =[];
        friend = [];
        res.json({ok:true});
    });
}