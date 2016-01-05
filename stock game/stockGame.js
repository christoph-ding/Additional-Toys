/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

var stockGame = function (arr) {
  var biggestDiff = 0;

  for (var i = 0; i < arr.length; i++) {
    var currDiff = 0;
    var currPrice = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] - currPrice > currDiff) {
        currDiff = arr[j] - currPrice;
      }
    };

    if (currDiff > biggestDiff) {
      biggestDiff = currDiff
    }
  }

  return biggestDiff;
}
