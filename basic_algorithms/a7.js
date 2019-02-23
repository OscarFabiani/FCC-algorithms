//TRUNCATE A STRING
//Strategies used:

//My first solution:
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}

or

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...': str;
}

//FCC first solution:
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}