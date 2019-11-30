var friendsData = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    // app.get("/api/friends/:friend", function (req, res) {
    //     var chosen = req.params.friend;
    //     console.log(chosen);
    // })
}