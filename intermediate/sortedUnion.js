function uniteUnique(arr) {
  var args = [], newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
    for (let j = 0; j < arguments[i].length; j++) {
      if (!newArr.hasOwnProperty(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//logs [1, 2, 3, 4, 5]
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]