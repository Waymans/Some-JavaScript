// finds the number of bribes it took for numbers to get where they are
// can at most bribe two ahead
var arr1 = [1, 2, 5, 3, 4, 7, 8, 6]; // 4
var arr2 = [1, 2, 5, 3, 7, 8, 6, 4]; // 7
var arr3 = [5, 1, 2, 3, 7, 8, 6, 4]; // too chaotic
var arr4 = [2, 5, 1, 3, 4]; // too chaotic
var arr5 = [2, 1, 5, 3, 4]; // 3
function myFunction(q) {
	var res = 0, i = 0;
    for (let i=0; i<q.length; i++) {
        if (q[i] - (i + 1) > 2) {return 'Too chaotic';}
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      		if (q[j] > q[i]) res++;
    	}
    }
    return res; 
}
console.log(myFunction(arr2))