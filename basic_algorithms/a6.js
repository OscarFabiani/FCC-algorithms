//REPEAT A STRING
//Strategies used: If statement, for loop, while loop, recursion

//My first solutions:
function repeatStringNumTimes(str, num) {
  let array = []
  if (num >= 0) {
    for (let i = num; i > 0; i--) {
      array.push(str);
    }
  }
  return array.join('');
}

or

function repeatStringNumTimes(str, num) {
  let newString = ''
  if (num < 0) {return newString;}
  for (let i = num; i > 0; i--) {
    newString += str;
  }
  return newString;
}

//FCC first solution:
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

//FCC second solution:
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

//My second solution:
function repeatStringNumTimes(str, num) {
  return num < 0 ? '': num === 1 ? str: str + repeatStringNumTimes(str, num - 1);
}