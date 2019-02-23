//FINDERS KEEPERS
//Strategies used:

//My first solution:
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

or

BEST
function findElement(arr, func) {
  for (let number of arr) {
    if (func(number)) {
      return number;
    }
  }
  return undefined;
}

//FCC first solution:
function findElement(arr, func) {
  let num = 0;
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}