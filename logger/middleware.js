// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path')

module.exports = function(app, express) {
  // logging
  app.use(morgan('dev'));

  // routing
  var mainRouter = express.Router();
  app.use('/', bodyParser.json(), mainRouter);
  require('./mainRouter.js')(mainRouter)
  
};
