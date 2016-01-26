'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'calories'
});

connection.connect();

function addMeal(meal) {
	connection.query('INSERT INTO calories SET ?', meal, function(err, result) {
		if (err) throw err;
		console.log('result.insertId: ', result.insertId);
	});
};

function allMeals(callback) {
	connection.query('SELECT * FROM calories', function(err, result) {
		if (err) throw err;
		callback(result);
	});
}


module.exports = {
	add: addMeal,
	all: allMeals
};