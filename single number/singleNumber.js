/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
*/

var singleNumber = function (arr) {

  var numOne;
  var numTwo;

  for (var i = 0; i < arr.length; i++) {
    // if a number is already 'recorded', then that number is a duplicate, cannot be returned
    if (arr[i] === numOne) {
      numOne = null;
    }
    if (arr[i] === numTwo) {
      numTwo = null;
    }
    // the number is not recorded
  }


}
