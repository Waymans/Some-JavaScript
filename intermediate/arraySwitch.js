// finds how many switches in took to get the current array
// from the array [1,2,3,4,5,...]
function arraySwitch(arr) {
  var res = 0, num = 0;
  while (num < arr.length) { loop(num); }
  // matches element to proper index: (i + 1)
  function loop(i) {
    var ele = arr[i];
    // if not in correct spot, change it along with its pair
    if (ele !== i + 1) {
      arr.splice(i, 1, arr[ele-1]);
      arr.splice(ele-1, 1, ele);
      ++res;
    } else { ++num; }
  }
  return res;
}
console.log(arraySwitch([4,3,1,2])); // logs 3
console.log(arraySwitch([7,1,3,2,4,5,6])); // logs 5