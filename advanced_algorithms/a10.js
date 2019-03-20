//SORTED UNION:

//My first solutions:
function uniteUnique(arr) {
  for (let a of [...arguments]) {
    for(let j of a) {
      if (!arr.includes(j)) {
        arr.push(j);
      }
    }
  }
  return arr
}
//or
function uniteUnique(arr) {
  [...arguments].forEach(a => a.forEach(n => !arr.includes(n) ? arr.push(n): null))
  return arr;
}
//or
function uniteUnique() {
  return [...arguments].reduce((t, a) => t.concat(a.filter(n => !t.includes(n))))
}

//FCC first solution:
function uniteUnique(arr) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

//My second solution:
function uniteUnique(arr) {
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!arr.includes(arguments[i][j])) {
        arr.push(arguments[i][j]);
      }
    }
  }
  return arr;
}

//FCC fourth solution:
function uniteUnique() {
  let newArray = [];
  let i = 0;
  while (arguments[i]){
    newArray = newArray.concat(arguments[i]);
    i++;
  }
  return newArray.filter((n, i) => newArray.indexOf(n) == i);
}

//My third solutions:
function uniteUnique() {
  return [...arguments].reduce((t, a) => t.concat(a)).filter((n, i, s) => s.indexOf(n) == i);
}
//or
function uniteUnique(...args) {
  return [].concat(...args).filter((n, i, s) => s.indexOf(n) == i);
}

//FCC fifth solution:
function uniteUnique(...arrays) {
  let flatArray = [].concat(...arrays);
  return [...new Set(flatArray)];
}

//My fourth solution:
function uniteUnique(...args) {
  return [...new Set([].concat(...args))];
}