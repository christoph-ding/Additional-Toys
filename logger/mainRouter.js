var mainController = require('./mainController.js');

module.exports = function (app) {
  app.get('/', mainController.handleGet);
}
