// hourglass for 2D array
var arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0] ]; // res = 28
function hourglassDD(arr) {
  var amt = [];
  function loop(j) {
  	for (let i=0; i<4; i++) {
      var total = arr[j][i]+arr[j][i+1]+arr[j][i+2]+
          		  arr[j+1][i+1]+
          		  arr[j+2][i]+arr[j+2][i+1]+arr[j+2][i+2];
      amt.push(total);
  	}
  }
  loop(0);loop(1);loop(2);loop(3);
  return Math.max(...amt);
}
console.log(hourglassDD(arr))