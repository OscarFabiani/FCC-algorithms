//FALSY BOUNCER
//Strategies used: for/of statement, .push(), .filter(), Boolean object.

//My first solution:
function bouncer(arr) {
  let newArray = [];
  for (let item of arr) {
    if (item) {
      newArray.push(item);
    }
  }
  return newArray;
}

//FCC first solution: BEST
function bouncer(arr) {
  return arr.filter(Boolean);
}