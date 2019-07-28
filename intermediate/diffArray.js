// returns array of unique elements between two arrays
function diffArray(arr1, arr2) {
	// combines both arrays
	let combined = arr1.concat(arr2), len = combined.length;
	
	// removes duplicates
	for (let i = 0; i < len; i++) {
 		let pos = combined.indexOf(combined[i], i + 1);
		
		// if duplicate found, remove both
    	if (pos !== -1) {
      		combined.splice(pos, 1);
      		combined.splice(i, 1);
      		i--; } 
  	}
  	return combined;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
console.log(diffArray(["diorite", "andesite", "grass", "pink wool"],
					  ["diorite", "andesite", "grass", "something"])); 
// ["pink wool","something"]