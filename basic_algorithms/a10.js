//TITLE CASE A SENTENCE:
//Strategies used: for loop, push(), split(), toUpperCase(), toLowerCase(), join(), for/of statement, map(), replace(), charAt(), regex.

//My first solutions:
function titleCase(str) {
  let newArray = [];
  let wordArray = str.split(' ');
  for (let word of wordArray) {
    let letterArray = word.split('');
    letterArray[0] = letterArray[0].toUpperCase();
    for (let i = 1; i < letterArray.length; i++) {
      letterArray[i] = letterArray[i].toLowerCase();
    }
    word = letterArray.join('')
    newArray.push(word);
  }
  return newArray.join(' ');
}

or

function titleCase(str) {
  let newWordArray = [];
  let wordArray = str.split(' ');
  for (let word of wordArray) {
    let newLetterArray = [];
    let letterArray = word.split('');
    for (let letter of letterArray) {
      letter = letter.toLowerCase();
      newLetterArray.push(letter);
    }
    newLetterArray[0] = newLetterArray[0].toUpperCase();
    word = newLetterArray.join('');
    newWordArray.push(word);
  }
  return newWordArray.join(' ');
}

or

function titleCase(str) {
  let wordArray = str.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    let letterArray = wordArray[i].split('');
    for (let j = 0; j < letterArray.length; j++) {
      letterArray[j] = letterArray[j].toLowerCase();
    }
    letterArray[0] = letterArray[0].toUpperCase();
    wordArray[i] = letterArray.join('');
  }
  return wordArray.join(' ');
}

//FCC first solution:
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

//My second solutions:
function titleCase(str) {
  let strArray1 = str.toLowerCase().split(" ");
  let strArray2 = strArray1.map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return strArray2.join(" ");
}

or

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ');
}

//FCC second solution: BEST
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}