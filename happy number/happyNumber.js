// I am not sure what to return in case it never resolves to 1

var happyNumber = function (num) {
  var splitDigit = num.toString();
  var sumDigits = 0;

  if (num === 1) {
    return true;
  }

  for (var i = 0; i < splitDigit.length; i++) {
    sumDigits += Math.pow(splitDigit, 2);
  }

  return happyNumber(sumDigits);
}

console.log(happyNumber(30));
