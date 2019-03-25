// left shifts item in array
var arr = [1, 2, 3, 4, 5];
var num = 4;
function leftRotate(a, d) {
  function rotate() {
    var ele = a.shift();
    a.push(ele);
    --d
  }
  while (d > 0) rotate(); 
  return a
}
console.log(leftRotate(arr, num)) // [5, 1, 2, 3, 4]