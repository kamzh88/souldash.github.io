var friendsData = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req,res) {
        console.log(req.body)
        var friend = compare(req.body, friendsData )
        console.log(friendsData)
        friendsData.push(req.body);
        res.json({friend:friend})
    })

    function compare(newSurvey, friendsData) {
                var userValue = [];
                for (var i = 0; i < newSurvey.scores.length; i++) {
                    userValue.push(`${parseInt(newSurvey.scores[i])}`);          
                };
        
                var score = [];
                var name = [];
                var totalDiff = [];
                for (var i = 0; i < friendsData.length; i++) {
                    var count = 0;
                    for (var j = 0; j < friendsData[i].scores.length; j++) {
                        // console.log("friends score" + friendsData[i].scores[j]);
                        var x = Math.abs(userValue[j] - friendsData[i].scores[j])
                        count += x
                        // console.log(x);
                    }
                    // console.log(count);
                    totalDiff.push(count);
                }
                console.log("diff: " + totalDiff);
                // console.log(Math.min(...totalDiff));
                lowDiff = Math.min(...totalDiff);
                arrayPosition = totalDiff.indexOf(lowDiff)
                // console.log(totalDiff.indexOf(lowDiff));
                var match = friendsData[arrayPosition].name;
                var picture = friendsData[arrayPosition].photo;

                return {matchkey: match, picturekey: picture}
                
            }
           
    
}