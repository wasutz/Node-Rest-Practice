Book = require('../models/book.js');

exports.findAll = function(request, response) {
	Book.findAll(function(err, books){
		if(err){
			throw err;
		}

		response.json(books);
	});
};