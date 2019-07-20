// finds how many switches in took to get the current array
// from the array [1,2,3,4,5,...]
// an element can only move ahead(to a lower index) twice
function myFunction(arr) {
  var res = 0, num = 0;
  while (num < arr.length) { loop(num); }
  function loop(i) {
    var ele = arr[i];
    if (ele !== i + 1) {
      arr.splice(i, 1, arr[ele-1]);
      arr.splice(ele-1, 1, ele);
      ++res;
    } else { ++num; }
  }
  return res;
}
console.log(myFunction([4,3,1,2])); // logs 3
console.log(myFunction([7,1,3,2,4,5,6])); // logs 5