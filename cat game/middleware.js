// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path')

module.exports = function(app, express) {
  // define routers
  var playerInputRouter = express.Router();
  var playerStatsRouter = express.Router();

  // player Input Router
  app.use('/api/input', bodyParser.json(), playerInputRouter);
  require('./router/inputRouter.js')(playerInputRouter);
  // player Stats Router
  app.use('/api/stats', bodyParser.json(), playerStatsRouter);
  require('./router/statsRouter.js')(playerStatsRouter);

  // logging
  app.use(morgan('dev'));

};
