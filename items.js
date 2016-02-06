'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'calories',
	timezone: 'utc'
});

connection.connect();

function addMeal(meal) {
	connection.query('INSERT INTO meal SET ?', meal, function(err, result) {
		if (err) throw err;
		console.log('result.insertId: ', result.insertId);
	});
}

function removeMeal(meal_id, callback) {
	connection.query('DELETE FROM meal WHERE meal_id=?', meal_id, function(err, result) {
		if (err) throw err;
		callback(result)
	});
}

function allMeals(callback) {
	connection.query('SELECT * FROM meal', function(err, result) {
		if (err) throw err;
		callback(result);
	});
}

module.exports = {
	add: addMeal,
	all: allMeals,
	remove: removeMeal
};