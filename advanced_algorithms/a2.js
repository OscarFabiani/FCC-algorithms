//DIFF TWO ARRAYS:

//My first solution:
function diffArray(arr1, arr2) {
  return arr1.filter(n => !arr2.includes(n)).concat(arr2.filter(n => !arr1.includes(n)));
}

//My second solution:
function diffArray(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i <= arr1.length; i++) {
    let counter = 0;
    for (let j = 0; j <= arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        counter++;
      }
    }
    if (counter == 0 ) {
      newArray.push(arr1[i]);
    }
  }
  for (let i = 0; i <= arr2.length; i++) {
    let counter = 0;
    for (let j = 0; j <= arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        counter++;
      }
    }
    if (counter == 0 ) {
      newArray.push(arr2[i]);
    }
  }
  return newArray;
}

//My third solution:
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((n, _, a) => a.indexOf(n, a.indexOf(n) + 1) == -1);
}

//FCC first solution:
function diffArray(arr1, arr2) {
  var newArr = [];
  function onlyInFirst(first, second) {
    for (var i = 0 ; i < first.length; i++) {
      if (second.indexOf(first[i]) == -1) {
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;
}

//My fourth solution:
function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0 ; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) == -1) {
        newArr.push(arr1[i]);
      }
    }
  for (var i = 0 ; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        newArr.push(arr2[i]);
      }
    }
  return newArr;
}

//FCC second solution:
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
}