
module.exports = function(app){
    var bookController = require('./controllers/BookController');

    app.get('/books', bookController.findAll);
    app.get('/books/:id', bookController.findById);
    app.post('/books', bookController.createBook);
    app.put('/books/:id', bookController.updateBook);
    app.delete('/books/:id', bookController.deleteBook);
}