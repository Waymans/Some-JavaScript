// finds maximum value for given index segments
// [i,j, increase]
function highestPeak(n, queries) {
	let res = [], finalNum = 0, comparNum = 0;
	
	// makes arr of 0's
	for (let i = 0; i <= n; i++) { res[i] = 0 }
	
	
	for (let i = 0; i < queries.length; i++) {
		res[queries[i][0] - 1] += queries[i][2];
		res[queries[i][1]] += -queries[i][2];
	}
	for (let i = 0; i < res.length; i++) {
		comparNum += res[i];
		comparNum > finalNum ? finalNum = comparNum: null;
	}
	return finalNum;
}
console.log(highestPeak(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]));
// 31
console.log(highestPeak(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]])); // 10