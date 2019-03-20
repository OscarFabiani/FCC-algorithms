//MISSING LETTERS:

//My first solutions:
function fearNotLetter(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let numbers = [...Array(26).keys()].map(n => n + 1); //not used
  let pairs = letters.reduce((obj, key, index) => Object.assign(obj, {[key] : numbers[index]}), {}); //not used
  let numValues = str.split('').map(x => pairs[x]);
  let result;
  for(var i = 1; i < numValues.length; i++) {
    if(numValues[i] - numValues[i-1] != 1) {
      result = letters[numValues[i] - 2];
      }
  }
  return result
}
//or
function fearNotLetter(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let numValues = str.split('').map(x => letters.indexOf(x));
  return letters[numValues.reduce((t, n, i, a) => n - a[i + 1] == -2 ? t + n + 1: t, null)]
}
//or
function fearNotLetter(str) {
  let numValues = str.split('').map(x => 'abcdefghijklmnopqrstuvwxyz'.indexOf(x));
  return 'abcdefghijklmnopqrstuvwxyz'[numValues.reduce((t, n, i, a) => n - a[i + 1] == -2 ? t + n + 1: t, null)]
}

//FCC first and third solutions:
function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) != str.charCodeAt(0) + i) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }  
  }
  return undefined;
}
or
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

//My second solutions:
function fearNotLetter(str) {
  let numValues = str.split('').map((_, i) => str.charCodeAt(i));
  return 'abcdefghijklmnopqrstuvwxyz'[numValues.reduce((t, n, i, a) => n - a[i + 1] == -2 ? t + n -96: t, null)];
}
//or
function fearNotLetter(str) {
  return 'abcdefghijklmnopqrstuvwxyz'[str.split('').map((_, i) => str.charCodeAt(i)).reduce((t, n, i, a) => n - a[i + 1] == -2 ? t + n -96: t, null)];
}
//or
function fearNotLetter(str) {
  return str.split('').reduce((t, l, i) => str.charCodeAt(i) == str.charCodeAt(i + 1) - 2 ? String.fromCharCode(str.charCodeAt(i) + 1): t, undefined);
}
//or
function fearNotLetter(str) {
  return str.split('').reduce((t, l, i) => l.charCodeAt() == str.charCodeAt(i + 1) - 2 ? String.fromCharCode(l.charCodeAt() + 1): t, undefined);
}

//FCC second solution:
function fearNotLetter(str) {
  let compare = str.charCodeAt(0), missing;
  str.split('').map((letter,index) => {
    if (str.charCodeAt(index) == compare) {
      compare++;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

//My third solutions:
function fearNotLetter(str) {
  let compare = str.charCodeAt(0), missing;
  str.split('').map((letter,index) => str.charCodeAt(index) == compare ? compare++: missing = String.fromCharCode(compare));
  return missing;
}
//or
function fearNotLetter(str) {
  let t = str.charCodeAt(0), r;
  str.split('').map(l => l.charCodeAt() == t ? t++: r = String.fromCharCode(t));
  return r;
}
//or
function fearNotLetter(str) {
  let r;
  str.split('').forEach((l, i) => str.charCodeAt(i + 1) - str.charCodeAt(i) > 1 ? r = String.fromCharCode(str.charCodeAt(i) + 1): null)
  return r;
}

//FCC fourth solution:
function fearNotLetter(str) {
  let allChars = '';
  let notChars = new RegExp('[^'+str+']','g');
  for (let i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) {
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  }
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

//My fourth solutions:
function fearNotLetter(str) {
  let all = '';
  Array(str.length).fill().forEach((n, i) => all += String.fromCharCode(str[0].charCodeAt(0) + i))
  return all.match(RegExp('[^'+str+']','g')) ? all.match(RegExp('[^'+str+']','g')).join('') : undefined;
}
//or
function fearNotLetter(str) {
  let all = Array(str.length).fill().reduce((t, _, i) => t += String.fromCharCode(str[0].charCodeAt(0) + i), '')
  return all.match(RegExp('[^'+str+']','g')) ? all.match(RegExp('[^'+str+']','g')).join('') : undefined;
}