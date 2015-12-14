/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

var add_digits = function (num) {
  // single digit now...
  if (num < 10) {
    return num;
  } 
  // not single digit yet
  var splitNum = num.toString();
  var sumDigits = 0;

  for (var i = 0; i < splitNum.length; i++) {
    sumDigits += Number(splitNum[i]);
  }
  return add_digits(sumDigits);
}

console.log(add_digits(39));
