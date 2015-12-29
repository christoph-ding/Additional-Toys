var statsController = require('./statsController.js')

module.exports = function (app) {
  // let the user see what they have done, no posting
  app.get('/inventory', inputController.inventory);
  app.get('/cats', inputController.cats);
  app.get('/stats', inputController.stats);  
}
