var greenSum = 0;
var yellowSum = 0;
var redSum = 0;

var percentOfColor = function(item) {
	var calCell = item.getElementsByTagName('td')[1];
	if(item.classList.contains("green")){
		greenSum += Number(calCell.innerText);
	};
	if(item.classList.contains("yellow")){
		yellowSum += Number(calCell.innerText);
	};
	if(item.classList.contains("red")){
		redSum += Number(calCell.innerText);
	};
};