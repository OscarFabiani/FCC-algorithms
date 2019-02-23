//SPINAL TAP CASE:

//My first solution:
function spinalCase(str) {
  return str.match(/[A-Z][a-z]+|[a-z]+/g).join('-').toLowerCase();
}

//FCC first solution: Does not accommodate expected variances outside of tested arguments(characters before/after the letters, etc.)
function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}

//My second solution:
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '').replace(/[^A-Za-z]+/g, '-').toLowerCase();
}

//FCC second solution: Does not accommodate expected variances outside of tested arguments(characters before/after the letters, etc.)
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

//My third solution:
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '').split(/[^a-zA-Z]+/).join('-').toLowerCase();
}

//FCC third solution: Does not accommodate expected variances outside of tested arguments(characters before/after the letters, etc.)
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

//My fourth solution:
function spinalCase(str) {
  return str.split(/[^a-zA-Z]+|(?=[A-Z])/).join(' ').trim().split(' ').join('-').toLowerCase();
}