var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore');

Book = require('./models/book.js');

app.get('/', function(request, response){
	response.send('Please use api in path /api/v1/books');
});

app.get('/api/v1/books', function(request, response){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}

		response.json(books);
	});
});

app.listen(3000, function(){
	console.log('Server Started On Port 3000');
});