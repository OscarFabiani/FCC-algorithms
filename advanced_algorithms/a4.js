//WHEREFOR ART THOU

//My first solution:
function whatIsInAName(collection, source) {
  let newArray = [];
  let sourceLength = 0;
  for (let p in source) {
    sourceLength++;
  }
  for (let i = 0; i < collection.length; i++) {
    let count = 0
    for (let j in source) {
      if (collection[i][j] == source[j]) {
        count++;
      }
      if (count == sourceLength) {
        newArray.push(collection[i]);
      }
    }
  }
  return newArray;
}

//My second solution:
function whatIsInAName(collection, source) {
  let newArray = [];
  for (let p of collection) {
    let count = 0;
    for (let m in source) {
      if (p[m] == source[m]) {
        count++;
      }
    }
    if (count == Object.keys(source).length) {
      newArray.push(p);
    }
  }
  return newArray;
}

//FCC first solution:
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

//My third solutions:
function whatIsInAName(collection, source) {
  return collection.filter(p => {
    for(let k in source) {
      if (p[k] !== source[k]) {
        return false;
        }
      }
    return true;
  });
}
or
function whatIsInAName(collection, source) {
  return collection.filter(p => {for(let k in source) {if (p[k] !== source[k]) {return false;}}return true;});
}

//FCC second solution:
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

//My fourth solutions:
function whatIsInAName(collection, source) {
  return collection.filter(p => {
    return Object.keys(source).every(k => {
      return p.hasOwnProperty(k) && p[k] == source[k];
    });
  });
}
or
function whatIsInAName(collection, source) {
  return collection.filter(p => Object.keys(source).every(k => p[k] == source[k]));
}

//FCC third solution:
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

//My fifth solution:
function whatIsInAName(collection, source) {
  return collection.filter(p => Object.keys(source).map(k => p[k] === source[k]).reduce((a, b) => a && b));
}