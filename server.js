const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// dotenv configuration
require("dotenv").config();

// Init app
const app = express();
var fileUpload = require('express-fileupload');

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true
}))

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  app.use('/api/recipe', require('./routes/api/recipe'));
  app.use('/api/fileUpload', require('./routes/api/fileUpload'));


//configuring port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));