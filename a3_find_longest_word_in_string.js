//FIND THE LONGEST WORD IN A STRING


//My first solution:
function findLongestWordLength(str) {
  let array = str.split(' ');
  let newArray = [];
  for (let word of array) {
    newArray.push(word.length);
  }
  let swapArray = [1];
  for (let number of newArray) {
    if (number > swapArray[0]) {
      swapArray.splice(0, 1, number);
    }
  }
  return swapArray[0];
}

//My second solution:
function findLongestWordLength(str) {
  let array = str.split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].length;
  }
  let number = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] > number) {
      number = array[j];
    }
  }
  return number;
}

//FCC first solution:
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

//My third soultion:
function findLongestWordLength(str) {
  let array = str.split(' ');
  let number = 0;
  for (let word of array) {
    if (word.length > number) {
      number = word.length;
    }
  }
  return number;
}

//FCC second solution:
function findLongestWordLength(s) {
  return s.split(' ').reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}

//My fourth solution:
function findLongestWordLength(str) {
  function longest(total, word) {
    if (word.length > total.length) {
      total = word;
    }
    return total;
  }
  return str.split(' ').reduce(longest).length;
}

//My fifth solution:
function findLongestWordLength(str) {
  return str.split(' ').reduce((x, y) => Math.max(x, y.length), 0);
}

//FCC third solution:
function findLongestWordLength(str) {
  let array = str.split(' ');
  if(array.length == 1){
    return array[0].length;
  }
  if(array[0].length >= array[1].length){
    array.splice(1,1);
    return findLongestWordLength(array.join(" "));
  }
  if(array[0].length <= array[1].length){
    return findLongestWordLength(array.slice(1).join(" "));
  }
}

//My sixth solution:
function findLongestWordLength(str) {
  let array = str.split(' ');
  if(array.length == 1) {
    return array[0].length;
  } else if (array[0].length >= array[1].length) {
    array.splice(1,1);
    return findLongestWordLength(array.join(" "));
  } else {
    return findLongestWordLength(array.splice(1).join(" "));
  }
}