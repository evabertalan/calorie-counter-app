'use strict';

var createRequest = function(method, url, data, callback) {
	request.open(method, url);
	request.setRequestHeader('Content-type', 'application/json');
	request.send(data);
	request.onreadystatechange = function() {
	console.log('status: ', request.readyState);
		if (request.readyState === 4) {
			callback(request.response);
		};
	};
};
