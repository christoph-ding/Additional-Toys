var app = angular.module('app', ['ui.router']);

// front-end routing
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homepage');
  $stateProvider
    .state('homepage', {
      url: '/homepage',
      templateUrl: 'views/homepage.html'
    })
    .state('use api', {
      url: '/use',
      templateUrl: 'views/testAPI.html',
      controller: 'APICtrl'
    })
});

// variables
var apiUrl = 'https://api.github.com/users/'

// http://api.walkscore.com/score?format=xml&address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&wsapikey=ffd1c56f9abcf84872116b4cc2dfcf31

// controller
app.controller('APICtrl', function ($scope, API) {
  $scope.getRequest = function () {
    console.log('issuing GET request ... ')      
    API.getRequest($scope.user)
     .then(function(github) {
      $scope.date = github.data.created_at;      
      console.log($scope.date);
     })
  };
});

// factory
app.factory('API', function ($http){
  var getRequest = function (user) {
    return $http({
      method: 'GET',
      url: apiUrl + user
    })
    .then(function (resp) {      
      return resp;
    })
  };
  return {getRequest: getRequest}
});
