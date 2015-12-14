// Define server 
var express = require('express');
var app = express();

// serve static files
app.use(express.static(__dirname))
console.log(__dirname);

// Connect to server
app.listen(8000);
console.log("Listening in on port 8000 from " + __dirname);

// Export
module.exports = app;
