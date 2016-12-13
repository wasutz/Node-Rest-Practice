Book = require('../models/Book.js');

exports.findAll = function(request, response) {
	Book.findAll(function(err, books){
		if(err){
			throw err;
		}

		response.json(books);
	});
};

exports.findById = function(request, response) {
	Book.findById(request.params.id, function(err, book){
		if(err){
			throw err;
		}

		response.json(book);
	});
};

exports.createBook = function(request, response) {
	var book = request.body;

	Book.createBook(book, function(err, book){
		if(err){
			throw err;
		}

		response.json(book);
	});
};

exports.updateBook = function(request, response) {
	var id = request.params.id;
	var book = request.body;

	Book.updateBook(id, book, function(err, book){
		if(err){
			response.status(404).send('Not found');
		}

		response.json(book);
	});
};

exports.deleteBook = function(request, response) {
	var id = request.params.id;

	Book.deleteBook(id, function(err, book){
		if(err){
			throw err;
		}

		response.status(204).send('No Content');
	});
};