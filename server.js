
// libraries
var express = require('express');
var morgan = require('morgan');

// server level variables
var port = 8080;

var app = express();

// Middleware
app.use(morgan('dev'));

app.get('/', function(req, res) {
	//get a response in JSOn of text and display it in the browser
	res.json("I am working");
});









app.listen(port, function(err) {
	if (err) throw err;
	console.log("Server running on Port " + port + ".");
});