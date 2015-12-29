var app = angular.module('app', ['ui.router']);

// front-end routing
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homepage');
  $stateProvider
    .state('homepage', {
      url: '/homepage',
      templateUrl: 'views/homepage.html'
    })
    .state('play', {
      url: '/cats',
      templateUrl: 'views/backyardview.html',
      controller: 'gameCtrl'
    })
});

// controller
app.controller('gameCtrl', function ($scope, game) {
  // buy something



  $scope.getRequest = function () {
    console.log('issuing GET request ... ')      
  };
});

// factory
app.factory('game', function ($http){
  var getRequest = function () {
    return $http({
      method: 'GET',
      url: apiUrl
    })
    .then(function (resp) {
      console.log(resp)
      return resp;
    })
  };
  return {getRequest: getRequest}
});
