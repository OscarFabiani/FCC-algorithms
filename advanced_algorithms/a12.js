//SUM ALL ODD FIBONACCI NUMBERS:

//My first solutions:
function sumFibs(num) {
  let fib = [1, 1];
  for (let i = 0; fib[i + 1] < num; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib.filter(n => n <= num && n % 2 != 0).reduce((t, n) => t + n);
}
//or
function sumFibs(num) {
  let fib = [1, 1];
  for (let i = 0; fib[i] < num; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib.filter(n => n <= num && n % 2 != 0).reduce((t, n) => t + n);
}

//FCC first solution:
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

//My second solutions:
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = [];
  while (currNumber <= num) {
    result.push(currNumber);
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result.filter(n => n % 2 != 0).reduce((t, n) => t + n);
}
//or
function sumFibs(num) {
  let fib = [1, 1];
  let result = 0;
  for (let i = 0; fib[i] <= num; i++) {
    fib.push(fib[i] + fib[i + 1]);
    if (fib[i] % 2 != 0) {
      result += fib[i];
    }
  }
  return result;
}

//My third solutions:
function sumFibs(num) {
    let fib = [1, 1];
    let nextFib = 1;
    while((nextFib = fib[0] + fib[1]) <= num) {
        fib.unshift(nextFib);
    }
    return fib.filter(n => n <= num && n % 2 != 0).reduce((t, n) => t + n);
}
//or
function sumFibs(num) {
    let fib = [1, 1];
    let nextFib = 1;
    for (let i = fib[0]; i <= num; i) {
      nextFib = fib[0] + fib[1];
      fib.unshift(nextFib);
    }
    return fib.filter(n => n <= num && n % 2 != 0).reduce((t, n) => t + n);
}