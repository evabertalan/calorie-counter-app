'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var items = require('./items.js');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/meals', function(req, res) {
	console.log('get');
	items.all(function(docs) {
		res.json(docs);
	});
});

app.post('/meals', function(req, res) {
	console.log('post');
	var item = items.add(req.body);
	res.status(201).json(item);
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
