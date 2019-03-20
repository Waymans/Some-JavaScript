function binaryAgent(str) {
  var arr = str.split(' ');
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    newArr.push(String.fromCharCode(parseInt(arr[i],2)))
  }
  return newArr.join('') 
} 
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//logs "Aren't bonfires fun!?"

//english to binary
function binaryAgent(str) {
  var newArr = [];
  for(var i=0; i<str.length; i++) {
    newArr.push(str.charCodeAt(i).toString(2))
  }
  return newArr.join(' ')
} 
console.log(binaryAgent("Aren't bonfires fun!?"));