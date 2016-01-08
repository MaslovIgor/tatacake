var express = require('express');
var app = express();
var db = require("./db")(listen);
var email = require("./email");

function render(res, view)
{
	res.render(view, {ga_id : process.env.GAID || 'UA-00000000-0'});
}
app.engine('html', require('uinexpress').__express);
app.set('view engine', 'html');
app.set('views', __dirname + "/tpl");
app.use('/images', express.static(__dirname + "/images"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));

app.get('/', function(req, res) {
    render(res, "index.html")
});

app.get('/save_email', function(req, res) {	
	email.saveEmail(req.query.email);
    render(res, "index.html");
});


function listen () {
	var port = process.env.PORT || 5000;
	app.listen(port);
	console.log('Express app started on port ' + port);
}