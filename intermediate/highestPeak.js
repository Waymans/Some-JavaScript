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
    var res = [], len = queries.length, amt = len;
	for (let i=1; i<len; i++) {
    	 if (queries[i][0] < queries[i-1][1]) { // i=1, 1     i=2, 1,2      i=3, 1,2,3
         	queries[i][2]+queries[i-1][2] > res ? res = queries[i][2]+queries[i-1][2]: null;
         } else {
           queries[i][2] > res ? res = queries[i][2]: null;
         }
    }
    return res;
}
console.log(myFunction(n, arr1));