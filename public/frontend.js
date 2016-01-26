'use strict';

var url = 'http://localhost:3000/meals'
var request = new XMLHttpRequest();

var mealInput = document.querySelector('.meal-input');
var calorieInput = document.querySelector('.calorie-input');

request.open('GET', url);
request.setRequestHeader('Content-type', 'application/json');
request.send();

function createPostRequest(method, url) { //new_meal fgv argumnet
	request.open('POST', url, //new_meal);
	request.setRequestHeader('Content-type', 'application/json');
	request.send();
}


mealInput.addEventListener('keypress', function(e) {
	var new_meal = JSON.stringify({name: mealInput.value});
	if (e.keyCode === 13) {
		createPostRequest(POST, url, //new_meal);
	};
});

calorieInput.addEventListener('keypress', function(e) {
	//hibakezeles ha nem szamot ad be if type not int alulra hiba uzenet, else lefut a fuggvny
	var new_calorie = JSON.stringify({calories: calorieInput.value});
	if (e.keyCode === 13) {
		createPostRequest(POST, url, //new_calorie);
	};
});