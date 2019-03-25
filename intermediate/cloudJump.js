// cant land on 1's and can jump over one 0 or to the next zero
var arr1 = [0, 0, 1, 0, 1, 0, 0, 0];
var arr2 = [0, 0, 1, 0, 0, 1, 0];
var arr3 = [0, 0, 0, 0, 1, 0];
function cloudJump(c) {
  var jump = 0;
  var obj = {'000': 2, '010': 2, '001': 1, '00': 1}; 
  function loop(str) {
    ++jump;
    c.splice(0, obj[str]);
    if (c.length === 1) {return null};
    var ele = c.slice(0,3).join('');
    loop(ele)
  }
  loop(c.slice(0,3).join(''));
  return jump
}
console.log(cloudJump(arr3)) // arr1 = 4, arr2 = 4, arr3 = 3