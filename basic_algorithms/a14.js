//MUTATIONS
//Strategies used: for loop, .toLowerCase(), .includes(), .indexOf()

//My first solution:
function mutation(arr) {
  let item1 = arr[0].toLowerCase();
  let item2 = arr[1].toLowerCase();
  for (let i = 0; i < arr[1].length; i++) {
    if (item1.includes(item2[i]) == false) {
      return false
    }
  }
  return true;
}

or

function mutation(arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1].toLowerCase()[i])) {return false}
  }
  return true;
}

//FCC first solution:
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

 //FCC second solution:
 function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {return arr[0].toLowerCase().indexOf(letter) != -1;});
}

//My second solution:

function mutation(arr) {
  return arr[1].toLowerCase().split('').every(letter => arr[0].toLowerCase().includes(letter));
}