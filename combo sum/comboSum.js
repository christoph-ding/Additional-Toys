/*
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
*/


var comboSum = function (arr, target) {

  var output = [];

  var inner = function (newTarget, currArr) {
    // base case
    if (newTarget === 0) {
      return output.push(currArr);
    }

    for (var i = 0; i < arr.length; i++) {
      return inner(newTarget - arr[i])
    }
  }
  
  inner(target, []);
  return output;
}

var test = new Array(3)
for (var i = 0; i < test.length; i++) {
  test[i] = 3
}
console.log(test);
