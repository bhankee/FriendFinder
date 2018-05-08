/*———————————————————————————
      Express Server
———————————————————————————*/
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

/*-----------------------------------------------------
 app is a parameter passed in htmlRoutes as app
 think of this as (function)(parameter to pass in)
 ----------------------------------------------------*/

/*-----------------------------------------------------
                    Middleware
 ----------------------------------------------------*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
