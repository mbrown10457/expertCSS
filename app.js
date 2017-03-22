var express = require("express");

var	app = express();

app.set('view engine','pug');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
	res.render("home");
});

app.get('/picturesite', function(req, res){
	res.render("picturesite");
});

app.get('/tictactoe', function(req, res){
	res.render('tictactoe');
});

app.listen(3000, function(){
	console.log("Port 3000 is now serving app.js");
});

