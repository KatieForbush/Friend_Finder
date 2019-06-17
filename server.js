//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
// var path = require('path');


// Static files
// needs to be called before the routes in order to work
// app.use(express.static("../app/public"));


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

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: `arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com`,
        user: `root`,
        password: ``,
        database: `wdlmksnd5j2khqp9`
    })
}



//Listening to the port that was set up
app.listen(port, () => console.log("Listening on port %s", port))