// Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

var isSurrounded = function (map) {
  var regions = 0;

  // i is row index, j for column  
  // iterate through each row
  for (var i = 0; i < map.length; i++) {
    var currRow = map[i];
    // iterate through that row's column
    for (var j = 0; j < currRow.length; j++) {
      // is the current cell O?
      if (currRow[j] === 'O') {
        regions++;
      }
      // does the current cell have an 0 to the left? above?
      if ( (j > 0 && currRow[j - 1] === 'O') || (i > 0 && map[i - 1][j] === 'O') ) {
        regions--;
      }
    }
  }
  return regions;
}
