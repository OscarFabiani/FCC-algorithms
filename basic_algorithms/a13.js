//WHERE DO I BELONG
//Strategies used: spread operator, .sort(), .indexOf(), for loop, .concat()

//My first solution:
function getIndexToIns(arr, num) {
  return [...arr, num].sort((a, b) => (a - b)).indexOf(num);
}

//FCC first solutions:
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }
  return arr.length;
}

or

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
  return a - b;
  });
  var i = 0;
  while (num > arr[i]) {
  i++;
  }
  return i;
}

//FCC second solution:
function getIndexToIns(arr, num) {
  let count = 0; 
  for (let i = 0; i < arr.length; i++){
    if(num > arr[i]) {
      count++;
    } 
  }
  return count;
}

//FCC third solution: BEST
function getIndexToIns(arr, num) {
return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}