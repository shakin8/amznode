
// libraries
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var User = require('./models/user');

// server level variables
var port = 8080;

var app = express();

// Connect to the database
mongoose.connect('mongodb://root:abc123@ds141264.mlab.com:41264/amznode', { useMongoClient: true }, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to the database");
	}
});

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createuser', function(req, res, next) {
	var user = new User();
	user.profile.name = req.body.name;
	user.password = req.body.password;
	user.email = req.body.email;

	user.save(function(err) {
		if (err) return next(err);
		res.json('successfully created a new user');
	});
});

app.get('/', function(req, res) {
	//get a response in JSOn of text and display it in the browser
	res.json("I am working");
});









app.listen(port, function(err) {
	if (err) throw err;
	console.log("Server running on Port " + port + ".");
});