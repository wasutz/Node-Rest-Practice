const BookRepository = require('../repositories/BookRepository.js');

exports.findAll = (request, response) => {
	BookRepository.findAll().then((books) => {
		response.json(books);
	}).catch((error) => {
		response.json(error);
	});
};

exports.findById = (request, response) => {
	BookRepository.findById(request.params.id).then((books) => {
		response.json(books);
	}).catch((error) => {
		response.json({"error": error.message});
	});
};

exports.createBook = (request, response) => {
	const book = request.body;

	BookRepository.createBook(book).then((book) => {
		response.json(book);
	}).catch((error) => {
		response.json({"error": error.message});
	});
};

exports.updateBook = (request, response) => {
	const id = request.params.id;
	const book = request.body;

	BookRepository.updateBook(id, book, function(err, book){
		if(err){
			response.status(404).send('Not found');
		}

		response.json(book);
	});
};

exports.deleteBook = (request, response) => {
	const id = request.params.id;

	BookRepository.deleteBook(id).then(() => {
		response.status(204).send('No content');;
	}).catch((error) => {
		response.json({"error": error.message});
	});
};