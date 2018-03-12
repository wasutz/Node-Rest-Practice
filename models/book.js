const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	price: Number,
	author: [String],
	created: {
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model("Book", bookSchema);
