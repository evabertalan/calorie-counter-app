'use strict';

var createTable = function(arrayOfColumnName) {
	var mainRow = table.insertRow(0);
	mainRow.setAttribute('class', 'main-row');
	for (var i = 0; i < arrayOfColumnName.length; i++ ) {
		var cell = mainRow.insertCell(i);
		cell.innerHTML = arrayOfColumnName[i]
	}
};

var rowCreator = function(mealItem) {
	var rowCount = table.rows.lengt;
	var row = table.insertRow(rowCount);

	row.setAttribute('id', mealItem.meal_id);

	row.insertCell(0).innerHTML = mealItem.name;
	row.insertCell(1).innerHTML = mealItem.calories;
	row.insertCell(2).innerHTML = mealItem.date.split('T')[0] + '. ' + mealItem.date.slice(11, 16);
	var deleteCell = row.insertCell(3);
	deleteCell.classList.add('delete-cell')
	deleteCell.innerHTML = "<button class='delete' onclick=\"deleteRow("+ mealItem.meal_id + ")\"><img src='/img/x.png'></button>";



	if(mealItem.calories <= 100) {
		row.setAttribute('class', 'green');
		row.classList.add('row')
	} else if (mealItem.calories > 100 && mealItem.calories <= 500) {
		row.setAttribute('class', 'yellow');
		row.classList.add('row')
	} else {
		row.setAttribute('class', 'red');
		row.classList.add('row')
	}

	percentOfColor(row);

};

