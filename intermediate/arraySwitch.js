var arr1 = [4,3,1,2]; //3
var arr2 = [7,1,3,2,4,5,6]; //5
function myFunction(arr) {
  var res = 0, num = 0;
  while (num < arr.length) { loop(num); }
  function loop(i) {
    var ele = arr[i]; // 4
    if (ele !== i + 1) {
      arr.splice(i, 1, arr[ele-1]);
      arr.splice(ele-1, 1, ele);
      ++res;
    } else { ++num; }
  }
  return res;
}
console.log(myFunction(arr2));