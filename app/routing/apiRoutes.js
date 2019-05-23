//requireing the friends info
var friends = require(`..data/friends.js`);

//route
module.exports = function(app) {

    //API GET
    app.get(`/api/friends`, function(req, res) {
    
    });

    //API POST
    app.post(`/api/friends`, function(req, res){

        //compare user with other users or best match
        var totalDiff = 0;
        //Object to hold match
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        //take the result of the user, post & parse
        var userInfo = req.body;
        var userName = userInfo.name;
        var userScore = userInfo.score;
        //change score to number instead of a string
        var num = userScore.map(function(item){
            return parseInt(item, 10);
        });
        
        userInfo = {
            "name": req.body.name,
            "photo": req.body.photo,
            "score": num
        }

        console.log("name: " + userName);
        console.log("User Score " + userScore);

        //user score into a sum
        var sum = num.reduce((a, b) => a + b, 0);
        console.log("total user score" + sum);

        //loop through all the friend possibilities
        for (let i = 0; i < friends.length; i++) {
            console.log(friend[i].name);
            totalDiff = 0;
            console.log("total difference" + totalDiff);
            console.log("best match friend difference" + bestMatch.friendDiff);

            var bestFriScore = friend[i].score.reduce((a, b) => a + b, 0);
            console.log("total friend score" + bestFriScore);
            totalDiff += Math.abs(sum - bestFriScore);
            console.log("-->" + totalDiff);
        
            //looped through all the scores of each user
            //calculate difference
            //console.log scores

            //if statement for if the differences are less then the differences of the current "best match"

        if (totalDiff <= bestMatch.friendDiff) {
            //reset the bestMatch to be the new friend
            bestMatch.name = friend[i].name;
            bestMatch.photo = friend[i].photo;
            bestMatch.friendDiff = totalDiff;

        }
            console.log(totalDiff + "total difference");

        }
        
        console.log(bestMatch);
        //save the user's data to database
        friend.push(userInfo);
        console.log("new user added");
        console.log(userInfo);
        //finally return a json with the users bestmatch. this will be used by the html
        res.json(bestMatch);
    })
}