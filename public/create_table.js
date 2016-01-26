'use strict';

var createTable = function() {
	var mainRow = table.insertRow(0);
    var name = mainRow.insertCell(0);
    var calorie = mainRow.insertCell(1);
    var date = mainRow.insertCell(2);
    name.innerHTML = "name";
    calorie.innerHTML = "calorie";
    date.innerHTML = "date";
};