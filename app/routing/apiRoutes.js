var data = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(data);
  });

  app.post('/api/new', function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
    var userScores = newFriend.scores;
    var bestMatch = {
      name: '',
      photo: '',
      pointDifference: 1000000000
    };
    console.log('USER SCORES: ' + JSON.stringify(newFriend));
    /*---------------------------------------------------
           Nested For loops to calulate best match
        ----------------------------------------------------*/
    for (var i = 0; i < data.length; i++) {
      var diff = 0;
      for (var j = 0; j < userScores.length; j++) {
        var currentFriendScore = data[i].scores[j];
        var currentUserScore = userScores[j];
        console.log('CURRENT_FRIEND_SCORE' + currentFriendScore);
        console.log('CURRENT_USER_SCORE' + currentUserScore);
        var diff = Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
      }
      // assign least diiference to bestMatch.
      if (diff <= bestMatch.pointDifference) {
        bestMatch.name = data[i].name;
        bestMatch.photo = data[i].photo;
        bestMatch.pointDifference = diff;
      }
      console.log('BEST MATCH: ' + JSON.stringify(bestMatch));
    }

    //console.log('NEWFRIEND: ' + JSON.stringify(newFriend, null, 2));
    data.push(newFriend);
    // give res back to front end
    res.json(bestMatch);
  });
};
