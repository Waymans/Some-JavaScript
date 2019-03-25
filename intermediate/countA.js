// count a's in str repeated num of times
var num = 10;
var str = 'aba'; // abaabaabaa
function countA(s, n) {
  var amt = 0;
  for (let i=0; i<s.length; i++ ) {
    s[i] === 'a' ? ++amt: null ;
  }
  var floor = Math.floor(n / s.length);
  var total = amt * floor;
  var remainder = n - s.length * floor;
  var newStr = s.substring(0,remainder);
  for (let i=0; i<newStr.length; i++ ) {
    s[i] === 'a' ? ++total: null ;
  }
  return total
}
console.log(countA(str, num))