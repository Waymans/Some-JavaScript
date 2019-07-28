// finds max hourglass value in given 36-digit 1D array
// array takes 3-1-3 format, e.g
// x,x,x
//  ,x, 
// x,x,x
function hourglassD(arr) {
	let amt = [];
	
	// finds the sum of the hourglass
	function loop(start, end) {
		for (let i = start; i < end; i++) {
			let total = 
				arr[i] + arr[i + 1] + arr[i + 2] + 
				arr[i + 7] + 
				arr[i + 12] + arr[i + 13] + arr[i + 14];
			amt.push(total);
		}
	}
	
	// when to start/end the loops
	for (let i = 0; i < 22; i += 6) {
		loop(i, i+4); // 0,4  6,10  12,16  18,22
	}
	
	return Math.max(...amt);
}
console.log(hourglassD([1, 1, 1, 0, 0, 0, 
						0, 1, 0, 0, 0, 0, 
						1, 1, 1, 0, 0, 0, 
						0, 0, 2, 4, 4, 0, 
						0, 0, 0, 2, 0, 0, 
						0, 0, 1, 2, 4, 0 ])); // 19
console.log(hourglassD([1, 1, 1, 0, 0, 0, 
						0, 1, 0, 0, 0, 0, 
						1, 1, 1, 0, 0, 0, 
						0, 9, 2, -4, -4, 0, 
						0, 0, 0, -2, 0, 0, 
						0, 0, -1, -2, -4, 0 ])); // 13
