var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express) // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html')
	app.set('view options', { layout: false })
	
    app.set('views', __dirname + "/tpl")
	// static content for our site
    app.use('/images', express.static(__dirname + "/images"))
	app.use('/css', express.static(__dirname + "/css"))
	app.use('/js', express.static(__dirname + "/js"))
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + "/tpl/index.html");
});

app.get('/save_email', function(req, res) {	
	console.log("Email at " + req.query.email)
    res.sendfile(__dirname + "/tpl/index.html")
});

var port = process.env.PORT || 5000       
app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)        // Пишем в консоль, что запустились