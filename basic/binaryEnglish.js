// binary to english
function binToEng(str) {
  	let arr = str.split(' '),
		newArr = [],
		len = arr.length;
	for(let i = 0; i < len; i++) {
		newArr.push(String.fromCharCode(parseInt(arr[i], 2)))
	}
	return newArr.join('');
} 
console.log(binToEng(`01000001 01110010 01100101 01101110 00100111 
01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010
01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111`));
//logs "Aren't bonfires fun!?"

// english to binary
function engToBin(str) {
	let newArr = [], len = str.length;
	for(var i = 0; i < len; i++) {
		newArr.push(str.charCodeAt(i).toString(2));
	}
	return newArr.join(' ');
} 
console.log(engToBin("Aren't bonfires fun!?"));