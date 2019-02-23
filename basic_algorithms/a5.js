//CONFIRM THE ENDING
//Strategies used:

//My first solutions:
function confirmEnding(str, target) {
  let slicedStrArray = str.split('').slice(str.length - target.length);
  return (target == slicedStrArray.join('')) ? true: false;
}

or

function confirmEnding(str, target) {
  let strArray = str.split('');
  let slicedStrArray = strArray.slice(str.length - target.length);
  if (target == slicedStrArray.join('')) {
    return true;
  }
  return false;
}

//FCC first solution:
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

//My second solutions:
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target ? true: false;
}

or

function confirmEnding(str, target) {
  let slicedStr = str.slice(str.length - target.length);
  if (target == slicedStr) {
    return true;
  }
  return false;
}