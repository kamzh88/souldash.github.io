var friendsData = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    // app.get("/api/about_me", function (req, res) {
    //     aboutMe.push(req.body);
    // })
}