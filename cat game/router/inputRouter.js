var inputController = require('./inputController.js')

module.exports = function (app) {
  // user can interact with the game by posting
  app.post('/buy', inputController.buy);
  app.post('/placeToy', inputController.placeToy);  
}
