const Book = require("../models/Book.js");

module.exports.findAll = () => {
	return Book.find({});
}

module.exports.findById = (id) => {
	return Book.findOne({"_id": id });
}

module.exports.createBook = (book) => {
	return Book.create(book);
}

module.exports.updateBook = (id, newBook) => {
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

module.exports.deleteBook = (id) => {
	return Book.remove({"_id": id });
}
