var arr1 = [2,1,5,3,4]; // 3
var arr2 = [2,5,1,3,4]; // 'Too chaotic'
function myFunction(q) {
  var len = q.length, orig = [], num = 1, res = 0;
  for (let i=0; i<len; i++) {
    orig.push(num); ++num; };
  for (let i=0; i<len; i++) {
    if (orig.indexOf(q[i]) > i+2) {
      return res = 'Too chaotic';
    } else if (orig.indexOf(q[i]) === i+2) {
      res+=2
    } else if (orig.indexOf(q[i]) === i+1) {
      ++res;
    } else {null;}
  };
  return res;
}
console.log(myFunction(arr3));