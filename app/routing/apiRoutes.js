// Requiring in friends array where our data is stored
var friends = require("../data/friends");

// Line of code that handles the API route
module.exports = function (app) {

    // The get API
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // The post API
    app.post("/api/friends", function (req, res) {

        // Setting equal to an invalid index
        var matchingFriendIndex = -1;

        // Setting equal to value the array can add to
        var currentBestFriendScore = 60;

        // For all the friends in the friend array
        for (i = 0; i < friends.length; i++) {

            var currArray = req.body["scores[]"];

            // Subtract all the corresponding values in the arrays
            var arrayDiff = currArray.map(function (currArrVal, index) {

                var mapCurrArray = friends[i];
                var mapScores = mapCurrArray["scores[]"];
                var mapNumber = mapScores[index];

                // Calculates the absolute value of the difference between the current index in the arrays
                var newNumber = Math.abs(parseInt(currArrVal) - parseInt(mapNumber));

                // Returns a the absolute value calculated
                return newNumber;
            });

            // Adds all the values in the array together
            var friendScore = arrayDiff.reduce(add);

            // If this friend's score is lower than the current best
            if (friendScore < currentBestFriendScore) {

                // Then save the index of this friend
                matchingFriendIndex = i;
            }
        }

        // Send the matching friend as a response and push the current person to the friends array
        res.send(friends[matchingFriendIndex]);
        friends.push(req.body);
    });

    // Add function because "+" is an operator
    function add(a, b) {
        return a + b;
    }
};