
/*Load data*/
var friend1 = require("../data/friend");

/*Routing*/
module.exports  = function(app){

    app.get("/api/friend", function (req, res){
       var bestMatch = {
           name:"",
           friendDifference: 100000000
       };
       var userData = req.body;
       var userScores = userData.scores;

       var totalDifference;
       for (var i = 0; i <friends.length; i++){
           var currentFriend = friends[i];
           totalDifference = 0;

           console.log(currentFriend.name);

        for (var j = 0; j < currentFriend.scores.length; j++){
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];

            totalDifference += Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
        }
        if (totalDifference <= bestMatch.friendDifference){
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDifference;
        }
       }

       friends.push(userData);

       res.json(bestMatch);

    })
};