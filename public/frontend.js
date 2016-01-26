'use strict';

var url = 'http://localhost:3000/meals';
var request = new XMLHttpRequest();

var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var submitButton = document.querySelector('.submit-button');
var mealList = document.querySelector('.meal-list');


var listCallback = function(response) {
	var mealItems = JSON.parse(response);
	console.log(response)
	console.log(mealItems);
	mealItems.forEach(function(mealItem) {
		var cucc = mealRow(mealItem)
		console.log(mealItem);
		var newMealRow = document.createElement('p');
		newMealRow.innerText = cucc
		mealList.appendChild(newMealRow);
	});
};

var refresh = function() {
	request.open('GET', url);
	request.setRequestHeader('Content-type', 'application/json');
	request.send();
	request.onreadystatechange = function() {
		console.log('status: ', request.readyState);
		if (request.readyState === 4) {
			listCallback(request.response);
		}
	}	
};

function mealRow(meal) {
	return '  *  ' + 
    meal.name +
    '  *  ' +
    meal.calories +
    '  *  ' +
    meal.date
}

//hibakezeles ha nem szamot ad be if type not int alulra hiba uzenet, else lefut a fuggvny
submitButton.addEventListener('click', function() {
	var meal = {
		name: mealInput.value,
		calories: calorieInput.value,
		date: dateInput.value
	};
	request.open('POST', url, meal);
	request.setRequestHeader('Content-type', 'application/json');
	request.send(meal && JSON.stringify(meal));
});

refresh();
