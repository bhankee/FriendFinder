var path = require('path');
/*-----------------------------------------------------
    app is a parameter passed in server.js as app
 ----------------------------------------------------*/
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
};
