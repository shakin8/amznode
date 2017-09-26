
// libraries
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');


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
app.use(cookieParser());
app.use(session ({
	resave: true,
	saveUninitialized: true,
	secret: "Secret123"
}))
app.use(flash);
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(express.static('__dirname' + '/public'));


var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');
app.use(mainRoutes);
app.use(userRoutes);






app.listen(port, function(err) {
	if (err) throw err;
	console.log("Server running on Port " + port + ".");
});