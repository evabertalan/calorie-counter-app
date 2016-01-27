'use strict';

//parameteresiteni kell
var createTable = function() {
	var mainRow = table.insertRow(0);
    var cell1 = mainRow.insertCell(0);
    var cell2 = mainRow.insertCell(1);
    var cell3 = mainRow.insertCell(2);
    cell1.innerHTML = "name";
    cell2.innerHTML = "calorie";
    cell3.innerHTML = "date";
};

var rowCreator = function(mealItem) {
	var rowCount = table.rows.lengt;
	var row = table.insertRow(rowCount);

	row.insertCell(0).innerHTML = mealItem.name;
	row.insertCell(1).innerHTML = mealItem.calories;
	row.insertCell(2).innerHTML = mealItem.date;
	row.insertCell(3).innerHTML = "delete button";
};