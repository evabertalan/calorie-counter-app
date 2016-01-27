'use strict';

var url = 'http://localhost:3000/meals';
var request = new XMLHttpRequest();

var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var submitButton = document.querySelector('.submit-button');
var table = document.querySelector('.meal-list');

var dateFilter = document.querySelector('.date-filter');
var filterButton = document.querySelector('.filter');
var allButton = document.querySelector('.all');

var filter = '';

var listCallback = function(response) {
	tableCallback();
	var mealItems = JSON.parse(response);
	if (filter === '') {
		mealItems.forEach(function(mealItem) {
			rowCreator(mealItem);
		})
	} else {
		(mealItems.filter(filterByDate)).forEach(function(mealItem) {
			rowCreator(mealItem);
		});		
	}
};

var refresh = function() {
	table.innerHTML = '';
	createRequest('GET', url, {}, listCallback)
};

var refreshCallback = function(response) {
	refresh();
	};

var tableCallback = function(response) {
	createTable();
};

var filterByDate = function(mealItem) {
	if(mealItem.date.split('T')[0] === filter) {
		return true;
	}
};

submitButton.addEventListener('click', function() {
	var meal = JSON.stringify({
		name: mealInput.value,
		calories: calorieInput.value,
		date: dateInput.value
	});
	createRequest('POST', url, meal, refreshCallback);
});

filterButton.addEventListener('click', function() {
	filter = dateFilter.value;
	refresh();
});

allButton.addEventListener('click', function() {
	filter = '';
	refresh();
});

refresh();
