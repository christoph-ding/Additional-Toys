//You will create a powers of 2 angular calculator. 
//There are only two operations, multiply and divide. 
//You'll need to create the controllers and whatever else
//you need to make this work. The only trick is that
//you CANNOT MODIFY THE HTML FILE.

angular.module('calculator', [])

.factory('calcFactory', function() {
  var answer = { number: 2 };

  return {
    answer: answer
  }
})

.controller('answerCtrl', function ($scope, calcFactory) {
  $scope.answer = calcFactory.answer;
})

.controller('multiplyCtrl', function ($scope, calcFactory) {
  $scope.answer = calcFactory.answer;
})

.controller('divideCtrl', function ($scope, calcFactory) {
  $scope.answer = calcFactory.answer;
  $scope.divide = function () {
    $scope.answer.number = $scope.answer.number / 2;
  }
})













