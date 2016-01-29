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
var sumCalorie = document.querySelector('.sum');

var greenCircle = document.querySelector('.green-circle');
var yellowCircle = document.querySelector('.yellow-circle');
var redCircle = document.querySelector('.red-circle');

var filter = '';

var listCallback = function(response) {
	createTable(['name', 'calorie', 'date']);
	var sum = 0;
	var mealItems = JSON.parse(response);
	
	if (filter === '') {
		mealItems.forEach(function(mealItem) {
			sum += mealItem.calories;
			rowCreator(mealItem);
		})
	} else {
		(mealItems.filter(filterByDate)).forEach(function(mealItem) {
			sum += mealItem.calories;
			rowCreator(mealItem);
		});		
	}

	sumCalorie.innerText = 'Total Calorie: ' + String(sum) + ' kCal';
	greenCircle.innerText = String(Math.round((greenSum/sum)*100)) + '%';
	yellowCircle.innerText = String(Math.round((yellowSum/sum)*100)) + '%';
	redCircle.innerText = String(Math.round((redSum/sum)*100)) + '%';
};

var refresh = function() {
	table.innerHTML = '';
	createRequest('GET', url, {}, listCallback)
};

var filterByDate = function(mealItem) {
	if(mealItem.date.split('T')[0] === filter) {
		return true;
	}
};

var deleteRow = function(id) {
	nullVariable()
	createRequest('DELETE', url +'/' + id, undefined, refresh);
}

var nullVariable = function() {
	greenSum = 0;
	yellowSum = 0;
	redSum = 0;
}

submitButton.addEventListener('click', function() {
	var meal = JSON.stringify({
		name: mealInput.value,
		calories: calorieInput.value,
		date: dateInput.value
	});
	nullVariable()
	createRequest('POST', url, meal, refresh);
});

filterButton.addEventListener('click', function() {
	filter = dateFilter.value;
	nullVariable()
	refresh();
});

allButton.addEventListener('click', function() {
	filter = '';
	nullVariable()
	refresh();
});

refresh();
