//SEARCH AND REPLACE:

//My first solutions:
function myReplace(str, before, after) {
  return /[A-Z]/.test(before[0]) ? str.replace(before, after[0].toUpperCase().concat(after.slice(1))): str.replace(before, after);
}
or
function myReplace(str, before, after) {
  return /[A-Z]/.test(before[0]) ? str.replace(before, after.replace(/^./, after[0].toUpperCase())): str.replace(before, after);
}

//FCC first solution:
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

//FCC second solution:
function myReplace(str, before, after) {
  var re = new RegExp(before,"gi");
  if(/[A-Z]/.test(before[0])){
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
  return str.replace(re,after);
}

//My second solution:
function myReplace(str, before, after) {
  if(/[A-Z]/.test(before[0])){
    return str.replace(before, after[0].toUpperCase() + after.slice(1));
     }
  return str.replace(before, after);
}

//FCC third solution: More functionality: mimics casing for all letters.
function myReplace(str, before, after) {
  function applyCasing(source, target) {
      var targetArr = target.split("");
      var sourceArr = source.split("");
      for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
          if (/[A-Z]/.test(sourceArr[i])) {
              targetArr[i] = targetArr[i].toUpperCase();
          }
          else targetArr[i] = targetArr[i].toLowerCase();
      }
      return (targetArr.join(""));
  }
  return str.replace(before, applyCasing(before, after));
}

//My third solutions: Added functionality: mimics casing for all letters.
function myReplace(str, before, after) {
  function applyCasing(source, target) {
    let newArray = [];
    for (var i = 0; i < target.length; i++){
      if (/[A-Z]/.test(source[i])) {
        newArray.push(target[i].toUpperCase());
      }
      else {
        newArray.push(target[i].toLowerCase());
      }
    }
    return (newArray.join(""));
  }
  return str.replace(before, applyCasing(before, after));
}
//or
function myReplace(str, before, after) { // Added functionality
    return str.replace(before, after.split('').map((j, i) => /[A-Z]/.test(before[i]) ? j.toUpperCase(): j.toLowerCase()).join(''));
}
//or
function myReplace(str, before, after) { //Original functionality
  return str.replace(before, after.split('').map((j, i) => /[A-Z]/.test(before[i]) ? j.toUpperCase(): j).join(''));
}