/* In the game of golf each hole has a par meaning 
the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname. */

// array of all nicknames.
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function that returns a nickname depending on the strokes made
function golfScore(par, strokes) {

  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  } 
}

console.log(golfScore(5, 4));