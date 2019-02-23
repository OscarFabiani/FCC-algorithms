//CHUNKY MONKEY
//Strategies used: for loop, Math.floor(), .push(), .splice(), .slice(), while loop, recursion, .concat(). 

//My first solutions:
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let total = arr.length / size;
  for (let i = 0; i < Math.floor(total); i++) {
    newArr.push(arr.splice(0, size));
  }
  if (total - Math.floor(total) > 0) {
    newArr.push(arr);
  }
  return newArr;
}

or

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let total = arr.length/size;
  for (let i = 0; i < Math.floor(total); i++) {
    let tally = i * size;
    newArr.push(arr.slice(tally, tally + 1 * size));
  }
  if (total - Math.floor(total) > 0) {
    newArr.push(arr.slice(Math.floor(total) * size))
  }
  return newArr;
}

//FCC first solution:
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];
  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) {
      temp.push(arr[a]);
    } else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    result.push(temp);
  }
  return result;
}

//FCC second solutions:
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
  arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

or

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

or

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}

//FCC third solution:
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size){
    return [arr];
  }
  else {
    return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
  }
}