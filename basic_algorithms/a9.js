//BOO WHO
//Strategies used:

//My first solution: BEST
function booWho(bool) {
  return (bool == true && typeof(bool) != 'number' || bool == false) ? true: false;
}

or

function booWho(bool) {
  if (bool == true && typeof(bool) != 'number' || bool == false) {
    return true;
  }
  return false;
}

//FCC first solution:
function booWho(bool) {
  return typeof bool === 'boolean';
}