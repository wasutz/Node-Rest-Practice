module.exports = function(app){
	const bookRoutes = require("./books");

	app.use('/api/books', bookRoutes);
}