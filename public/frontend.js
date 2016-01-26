'use strict';

var url = 'http://localhost:3000/meals';
var request = new XMLHttpRequest();

var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var submitButton = document.querySelector('.submit-button');
var table = document.querySelector('.meal-list');


var listCallback = function(response) {
	tableCallback();
	var mealItems = JSON.parse(response);
	mealItems.forEach(function(mealItem) {

		var rowCount = table.rows.lengt;
		var row = table.insertRow(rowCount);

		row.insertCell(0).innerHTML = mealItem.name
		row.insertCell(1).innerHTML = mealItem.calories
		row.insertCell(2).innerHTML = mealItem.date
	});
};

var refresh = function() {
	table.innerHTML = '';
	createRequest('GET', url, {}, listCallback)
};

var refreshCallback = function(response) {
	refresh();
	};


var createTable = function() {
	var mainRow = table.insertRow(0);
    var name = mainRow.insertCell(0);
    var calorie = mainRow.insertCell(1);
    var date = mainRow.insertCell(2);
    name.innerHTML = "name";
    calorie.innerHTML = "calorie";
    date.innerHTML = "date";
};

var tableCallback = function(response) {
	createTable();
};

submitButton.addEventListener('click', function() {
	var meal = JSON.stringify({
		name: mealInput.value,
		calories: calorieInput.value,
		date: dateInput.value
	});
	createRequest('POST', url, meal, refreshCallback);
});

refresh();
