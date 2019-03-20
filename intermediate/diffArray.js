function diffArray(arr1, arr2) {
  var newerArr = [];
  var newArr = [];
  newArr = arr1.concat(arr2);
  for (let i = 0; i < newArr.length; i++) {
    if (!arr1.includes(newArr[i]) || !arr2.includes(newArr[i])) { 
      newerArr.push(newArr[i]);
    }
  }
  return newerArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//logs [4]
/*diffArray(["diorite", "andesite", "grass", "pink wool"], 
	["diorite", "andesite", "grass", "something"]) should return ["pink wool"]*/