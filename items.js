'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'calories'
});

function addItem(attributes) {
	connection.query('INSERT INTO calories SET ?', attributes, function(err, result) {
		if (err) throw err;
		console.log('result.insertId: ', result.insertId);
	});
}

connection.connect();

module.exports = {
	add: addItem
}