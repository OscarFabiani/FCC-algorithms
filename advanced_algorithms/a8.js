//DNA PAIRING:

//sMy first solution:
function pairElement(str) {
  let a = [];
  for (let i of str) {
    switch(i) {
      case 'G':
      a.push([i, 'C']);
      break;
      case 'C':
      a.push([i, 'G']);
      break;
      case 'A':
      a.push([i, 'T']);
      break;
      case 'T':
      a.push([i, 'A']);
      break;
    }
  }
  return a;
}

//FCC second solution:
function pairElement(str) {
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  var arr = str.split("");
  return arr.map(x => [x,pairs[x]]);
}

//My second solution:
function pairElement(str) {
  let o = {"A": "T", "T": "A", "C": "G", "G": "C"};
  return str.split('').map(x => [x, o[x]]);
}

//My third solution:
function pairElement(str) {
  let a = str.replace(/A/g,"!").replace(/T/g,"A").replace(/!/g,"T").replace(/G/g,"!").replace(/C/g,"G").replace(/!/g,"C");
  return str.split('').map((x, i) => [x, a[i]])
}

//My fourth solutions:
function pairElement(str) {
  let a = str.replace(/A|T|G|C/g, x => ({"A": "T", "T": "A", "C": "G", "G": "C"})[x])
  return str.split('').map((x, i) => [x, a[i]]);
}
//or
function pairElement(str) {
  return str.split('').map((x, i) => [x, str.replace(/A|T|G|C/g, x => ({"A": "T", "T": "A", "C": "G", "G": "C"})[x])[i]]);
}