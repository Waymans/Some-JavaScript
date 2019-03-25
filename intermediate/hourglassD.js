// hourglass for 1D array
var arr = [
1, 1, 1, 0, 0, 0,
0, 1, 0, 0, 0, 0,
1, 1, 1, 0, 0, 0,
0, 0, 2, 4, 4, 0,
0, 0, 0, 2, 0, 0,
0, 0, 1, 2, 4, 0 ]; // res = 19
var arr2 = [
1, 1, 1, 0, 0, 0,
0, 1, 0, 0, 0, 0,
1, 1, 1, 0, 0, 0,
0, 9, 2, -4, -4, 0,
0, 0, 0, -2, 0, 0,
0, 0, -1, -2, -4, 0 ]; // res = 13
function hourglassD(arr) {
  var amt = [];
  function loop(a,b) {
  	for (let i=a; i<b; i++) {
      var total = arr[i]+arr[i+1]+arr[i+2]+arr[i+7]+arr[i+12]+arr[i+13]+arr[i+14];
      amt.push(total);
  	}
  }
  loop(0,4);loop(6,10);loop(12,16);loop(18,22);
  return Math.max(...amt);
}
console.log(hourglassD(arr1))