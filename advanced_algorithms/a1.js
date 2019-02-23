//SUM ALL NUMBERS IN A RANGE
//New strategies used: Array.from(), fill()

//My first solutions:
function sumAll(arr) {
  let sortedArr = arr.sort((x, y) => x - y);
  let newArr = []
  for (let i = 0; i <= sortedArr[1] - sortedArr[0]; i++) {
    newArr.push(sortedArr[0] + i);
  }
  return newArr.reduce((x, y) => x + y);
}

//FCC first solution:
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

//My second solution:
function sumAll(arr) {
  let newArr = [];
  for (let i = 0; i <= Math.max(...arr) - Math.min(...arr); i++) {
    newArr.push(Math.min(...arr) + i);
  }
  return newArr.reduce((x, y) => x + y);
}

//My third solution:
function sumAll(arr) {
  let num = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    num += i;
  }
  return num;
}

//My fourth solutions:
function sumAll(arr) {
  return Array(Math.max(...arr) - Math.min(...arr) + 1).fill().map((_, i) => Math.min(...arr) + i).reduce((x, y) => x + y);
}
or
function sumAll(arr) {
  return Array.from({length: Math.max(...arr) - Math.min(...arr) + 1}, (_, i) => Math.min(...arr) + i).reduce((x, y) => x + y);
}
or
function sumAll(arr) {
  return Array.from(Array(Math.max(...arr) - Math.min(...arr) + 1), (_, i) => Math.min(...arr) + i).reduce((x, y) => x + y);
}

//FCC second solution:
function sumAll(arr) {
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

//My fifth solution:
function sumAll(arr) {
  return (Math.max(...arr) - Math.min(...arr) + 1) * (Math.min(...arr) + Math.max(...arr)) / 2;
}