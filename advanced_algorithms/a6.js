//PIG LATIN:

//My first solutions:
function translatePigLatin(str) {
  let m = str.match(/^[^aeiou]+/);
  return !m ? str.concat('way'): str.slice(m[0].length).concat(m, 'ay')
}
or
function translatePigLatin(str) {
  let m = str.match(/^[^aeiou]+/);
  if (!m) {
    return str.concat('way');
  }
  return str.slice(m[0].length).concat(m, 'ay')
}

//My second solution:
function translatePigLatin(str) {
  return /^[aeiou]/.test(str) ? str.concat('way'): str.replace(/[^aeiou]+/, '').concat(str.match(/^[^aeiou]+/), 'ay');
}

//FCC first solution:
function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if(str.match(regex) === null) {
    pigLatin = str + 'ay';
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substring(vowelIndice) + str.substring(0, vowelIndice) + 'ay';
  }
  return pigLatin;
}

//FCC second solution:
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

//FCC third solution:
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 return strArr.join("")+"ay";
}