//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');

//create express server & sets up a port
var app = express(); 
var port = process.env.PORT || 8080; 

//Router
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));

//Listening to the port that was set up
app.listen(port, () => console.log("Listening on port %s", port))