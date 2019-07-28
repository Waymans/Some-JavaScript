// finds max hourglass value in given 36-digit 2D array
// array takes 3-1-3 format, e.g
// x,x,x
//  ,x, 
// x,x,x
function hourglassDD(arr) {
	let amt = [];
	
	// find sum of hourglass figure
	function loop(j) {
		for (let i = 0; i < 4; i++) {
			let total = 
				arr[j][i] + arr[j][i + 1] + arr[j][i + 2] + 
				arr[j + 1][i + 1] + 
				arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2];
			amt.push(total);
		}
	}
	
	// when to start/end loops
	for (let i = 0; i < 4; i++) {
		loop(i);
	}
	return Math.max(...amt);
}
console.log(hourglassDD([
	[-9, -9, -9, 1, 1, 1], 
	[0, -9, 0, 4, 3, 2], 
	[-9, -9, -9, 1, 2, 3], 
	[0, 0, 8, 6, 6, 0], 
	[0, 0, 0, -2, 0, 0], 
	[0, 0, 1, 2, 4, 0] ])); // 28