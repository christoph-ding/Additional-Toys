// Define server 
var express = require('express');
var app = express();

// Connect to server
app.listen(8000);
console.log("Listening in on port 8000 from " + __dirname);

// middleware
require('./middleware.js')(app, express);

// Export
module.exports = app;
