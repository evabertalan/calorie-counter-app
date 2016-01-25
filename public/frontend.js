'use strict';

var url = 'http://localhost:3000/meals'
var request = new XMLHttpRequest();

request.open('GET', url);
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.open('POST', url);
request.setRequestHeader('Content-type', 'application/json');
request.send();
