const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_MONGO_URI);

require("./routes")(app);

app.get("/", function(request, response){
	response.send(`It's works!`);
});

module.exports = app;