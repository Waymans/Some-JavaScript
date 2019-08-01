// left shifts items in an array
function leftRotate(a, d) {
	let end = a.splice(d), len = end.length - 1; 
	for (let i = len; i > -1; i--) {
		a.unshift(end[i]);
	}
	return a;
}
console.log(leftRotate([1, 2, 3, 4, 5], 3)); // [4, 5, 1, 2, 3]