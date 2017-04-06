"use strict"
let express = require('express'),
	app = express();
let path = require('path');

let users = require("./users.json");

app.set('port', (process.env.PORT || 8080));

app.use(express.static('./'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});


let server = app.listen(app.get('port'), function () {
	console.log('Servidor escuchando en el puerto %s', app.get('port'));
});
