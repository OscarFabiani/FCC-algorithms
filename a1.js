//REVERSE A STRING

//My first solution:
function reverseString(str) {
    let array = [];
    for (let letter of str) {
      array.unshift(letter);
    }
    return array.join('');
  }
  
//FCC solution:
function reverseString(str) {
    return str.split('').reverse().join('');
}

//Recursive solution:
function reverseString(str) {
    if (str.length <= 1) {return str;}
    return reverseString(str.substr(1)) + str[0];
}
