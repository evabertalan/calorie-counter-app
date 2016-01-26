'use strict';

var url = 'http://localhost:3000/meals'
var request = new XMLHttpRequest();

var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');
var dateInput = document.querySelector('.date-input');
var submitButton = document.querySelector('.submit-button');

request.open('GET', url);
request.setRequestHeader('Content-type', 'application/json');
request.send();

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
