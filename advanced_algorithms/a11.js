//CONVERT HTML ENTITIES:

//My first solution:
function convertHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

//FCC first solution:
function convertHTML(str) {
  let temp = str.split('');
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  temp = temp.join('');
  return temp;
}

//FCC third solution:
function convertHTML(str) {
  let htmlEntities={'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', '\'':"&apos;"};
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

//My second solution:
function convertHTML(str) {
  return str.split('').map(c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', '\'':"&apos;"})[c] || c).join('');
}

//My third solution:
function convertHTML(str) {
  return str.replace(/&|<|>|'|"/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', '\'':"&apos;"})[c]);
}