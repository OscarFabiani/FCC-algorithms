//SEEK AND DESTROY:
//New strategies used: Rest parameters

//My first solution: Rest parameters
function destroyer(arr, ...args) {
  return arr.filter(n => !args.includes(n));
}

//My second solution: For loop, filter()
function destroyer(arr) {
  let newArray = [];
  for (let i = 1; i < arguments.length; i++) {
    newArray.push(arguments[i]);
  }
  return arr.filter(n => !newArray.includes(n));
}

//My third solution: Spread operator
function destroyer(arr) {
  return arr.filter(x => ![...arguments].includes(x));
}

//My fourth solution: Array.prototype, call()
function destroyer(arr) {
  return arr.filter(n => !Array.prototype.slice.call(arguments, 1).includes(n));
}

//FCC first solution:
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

//FCC second solution:
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {return !args.includes(val);});
}

//My fifth solution:
function destroyer(arr) {
  return arr.filter(n => !Array.from(arguments).slice(1).includes(n));
}