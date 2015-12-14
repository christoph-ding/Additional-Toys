var missing = function (arr) {

  // iterate through arr
  // each element should be i + 1
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {      
      return i + 1;
    }
  }
  // empty arr
  return 'invalid arr'
}

var test = [1,2,3,5]
console.log(missing(test))
