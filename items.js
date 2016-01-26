'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'calories'
});

function addMeal(meal) {
	connection.query('INSERT INTO calories SET ?', meal, function(err, result) {
		if (err) throw err;
		console.log('result.insertId: ', result.insertId);
	});
};

connection.connect();

module.exports = {
	add: addMeal
};