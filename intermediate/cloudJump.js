// cant land on 1's and can jump over one 0 or to the next zero
function cloudJump(c) {
	var jump = 0;
	var obj = {'000': 2, '010': 2, '001': 1, '00': 1}; 
	
	// removes 1 or 2 front elements depending on relation to obj
	function loop(str) {
		jump++;
		// changes original array
		c.splice(0, obj[str]);
		if (c.length === 1) {return null}
		loop(c.slice(0, 3).join(''));
	}
	
	// sends in first three
	loop(c.slice(0, 3).join(''));
	return jump;
}
console.log(cloudJump([0, 0, 1, 0, 1, 0, 0, 0])); // 4
console.log(cloudJump([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(cloudJump([0, 0, 0, 0, 1, 0])); // 3