//FACTORIALIZE A NUMBER

//My first solution:
function factorialize(num) {
  let newNum = 1;
  for (let i = num; i > 0; i--) {
    newNum *= i;
  }
  return newNum;
}

//FCC solution:
function factorialize(num) {
  if (num === 0) {return 1};
  return num * factorialize(num - 1);
}