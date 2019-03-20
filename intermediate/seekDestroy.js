function destroyer(arr) {
  var args = [];
  var newArr =[];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
    newArr = arr.filter(el => !args.includes(el)) 
  }
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//logs [1, 1]
//destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]