function dropElements(arr, func) {
  return arr.findIndex(func) == -1 ? []:arr.slice(arr.findIndex(func));
}
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
//logs [3, 4]
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]