function sumFibs(num) {
  var x = 1, y = 1, arr = [];
  fibo();
  function fibo() {
    if (Math.max.apply(null, arr) < num) {
      if (x <= y) {
        arr.push(x);
        x = x + y;
        return fibo();
      } else {
        arr.push(y);
        y = x + y
        return fibo();
      }
    }
  }
  return arr.filter(x => {return (x % 2) && x <= num}).reduce((total,value) => {return total + value});
}
console.log(sumFibs(10));
//logs 10
//sumFibs(1000) should return 1785