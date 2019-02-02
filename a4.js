//RETURN ARRAY OF LARGEST NUMBERS IN NESTED ARRAYS

//My first solution:
function largestOfFour(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > number) {
        number = arr[i][j];
      }
    }
    newArray.push(number);
  }
  return newArray;
}

//or

function largestOfFour(arr) {
  let newArray = [];
  for (let subArray of arr) {
    let biggest = subArray[0];
    for (let number of subArray) {
      if (number > biggest) {
        biggest = number;
      }
    }
    newArray.push(biggest);
  }
  return newArray;
}

//FCC first solution:
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

//FCC second solution:
function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

//My second solution:
function largestOfFour(array) {
  return array.map((subArray) => subArray.reduce((total, number) => (total > number) ? total : number));
}

//or

let largestOfFour = x => x.map((x) => x.reduce((x, y) => (x > y) ? x : y));

//FCC third solution:
//NOTE: As of 12/08/2018 I don't quite understand how this works and will move on for now.
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}