// finds maximum value for given index segments
// [i,j, increase]
var n = 10;
var arr1 = [
[2, 6, 8],
[3, 5, 7],
[1, 8, 1],
[5, 9, 15]]; // 31
var arr2 = [
[1, 5, 3],
[4, 8, 7],
[6, 9, 1]]; // 10
function myFunction(n, queries) {
    var res = [], finalNum = 0, comparNum = 0;
    for (let i=0; i<=n; i++) { res[i] = 0 }
	for (let i=0; i<queries.length; i++) {
        res[queries[i][0]-1] += queries[i][2];
      	res[queries[i][1]] += -queries[i][2];
    }
    for (let i=0; i<res.length; i++) {
    	comparNum += res[i];
        comparNum > finalNum ? finalNum = comparNum: null;
    }
    return finalNum;
}
console.log(myFunction(n, arr1));