
// Try One did not really work
var nim = function (stones, myTurn) {
  // by default, you take the first turn
  debugger;

  if (stones <= 0) {
    return false;
  }
  if ( stones <= 3) {
    return myTurn;
  }    
  if (stones - 1 === 4 || stones - 2 === 4 || stones - 3 === 4) {
    return myTurn;
  }
  return ( nim( stones - 1 , !myTurn ) && nim( stones - 2 , !myTurn ) && nim( stones - 3 , !myTurn ) );
}

// Try Two
var nimTwo = function (stones, turn) {
  // even turns are player, odd turns are opponent
  // starts with player
  var turn = turn || 0;

  // the current turn wins
  if (stones <= 3) {
    // opponent's turn
    if (turn % 2 === 0) {
      return true;
    } else
    {
      return false;
    }
  }

  turn++;
  // opponents turn, is there a decision they can make that they might win?
  if (turn % 2 === 1) {
    return ( nimTwo( stones - 1, turn ) || nimTwo( stones - 2, turn) || nimTwo( stones - 3, turn) )
  }
  // if it is your turn, can one of your plays ensure victory?
  else {
    return ( nimTwo( stones - 1, turn ) && nimTwo( stones - 2, turn) && nimTwo( stones - 3, turn) )
  }

}

console.log( nimTwo (12))
