//SLICE AND SPLICE:
//Strategies used: slice(), splice(), spread operator, for loop.

//My first solutions:
function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  newArray.splice(n, 0, ...arr1);
  return newArray;
}

or

function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  newArray.splice(n, 0, ...arr1);
  return newArray;
}

//My second solutions:
function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  for (let i = n; i < arr1.length + n; i++) {
    newArray.splice(i, 0, arr1[i - n]);
  }
  return newArray;
}

or

function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(i + n, 0, arr1[i]);
  }
  return newArray;
}

//FCC first solution:
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}