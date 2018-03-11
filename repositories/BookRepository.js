const Book = require('../models/Book.js');

module.exports.findAll = function(callback, limit){
	Book.find(callback).limit(limit);
}

module.exports.findById = function(id, callback){
	Book.findOne({"_id": id }, callback);
}

module.exports.createBook = function(book, callback){
	Book.create(book, callback);
}

module.exports.updateBook = function(id, newBook, callback){
	Book.findOne({"_id": id }, function(err, book){
		if(err){
			throw err;
		}

		book.title = newBook.title;
		book.price = newBook.price;
		book.authors = newBook.authors;

		book.save(callback);
	});
}

module.exports.deleteBook = function(id, callback){
	Book.remove({"_id": id }, callback);
}
