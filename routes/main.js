var router = require('express').Router();

router.get('/', function(req, res) {
	//get a response in JSOn of text and display it in the browser
	res.render('main/home');
});
router.get('/about', function(req, res) {
	//get a response in JSOn of text and display it in the browser
	res.render('main/about');
});



module.exports = router;