// finds how many switches in took to get the current array
// from the array [1,2,3,4,5,...]
// element can move ahead(to lower index) at most twice
// element can be moved back - by others moving ahead - indefinitely
function bribeLine(ele) {
	var res = 0, i = 0;
    for (let i=0; i<ele.length; i++) {
		// if ele is 3+ than what it should be
        if (ele[i] - (i + 1) > 2) {return 'Too chaotic';}
		// starts at possible index (0 to 2 less than ele)
		// adds to res if ele greater than number at index
        for (let j = Math.max(0, ele[i] - 2); j < i; j++) {
      		if (ele[j] > ele[i]) res++;
    	}
    }
    return res; 
}
console.log(bribeLine([2,1,5,3,4])); // 3
console.log(bribeLine([2,5,1,3,4])); // 'Too chaotic'
console.log(bribeLine([1, 2, 5, 3, 4, 7, 8, 6])); // 4
console.log(bribeLine([1, 2, 5, 3, 7, 8, 6, 4])); // 7
console.log(bribeLine([5, 1, 2, 3, 7, 8, 6, 4])); // 'Too chaotic