function sumPrimes(num) {
  var x = 1;
  var arr = [];
  prime();
  function prime() {
    if (Math.max.apply(null, arr) < num) {
      arr.push(x);
      x++;
      return prime();
    }
  }
  return arr.filter(x => {return check(x)}).reduce((total,value) => {return total + value});
}
function check(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(sumPrimes(10));
//logs 17
//sumPrimes(977) should return 73156