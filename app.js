var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.get('/', function(request, response){
	response.send('Please use api in path /api/v1/books');
});

app.listen(3000, function(){
	console.log('Server Started On Port 3000');
});