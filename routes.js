
module.exports = function(app){
    var bookController = require('./controllers/BookController');

    app.get('/books', bookController.findAll);
}