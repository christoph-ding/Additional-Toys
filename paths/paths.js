// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

var uniquePaths = function (matrix) {
  var paths = 0;
  // I am assuming it is a square
  var edgeSize = matrix.length;

  var inner = function (y, x, option) {
    // base case, reached bottom
    if (x === edgeSize - 1 && y === edgeSize - 1) {
      paths++;
      return;
    }
    // other case, an obstacle
    if (matrix[y][x] === 1) {
      return;
    }

    // otherwise, go in each direction, except from the one you came from

    // go down
    if (option !== 'up' && y < edgeSize - 2) {
      inner(y + 1, x, 'down')
    }
    // go up
    if (option !== 'down' && y > 0) {
      inner(y - 1, x, 'up')
    }
    // go left
    if (option !== 'right' && x > 0) {
      inner(y, x - 1, 'left')
    }
    // go right
    if (option !== 'right' && x > 0) {
      inner(y, x + 1, 'right')
    }
  }

  inner(0, 0);
  return paths;
}
