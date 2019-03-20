function smallestCommons(arr) {
  var newArr = [], i, j, min = Math.min.apply(null,arr), max = Math.max.apply(null,arr);
  arr.sort(function(a,b){return b-a});
  for (i = max; i >= min; i--){
    newArr.push(i);
  }
  for (j = max; j < newArr.reduce((total,value)=>{return total*value}); j+=max) {
      if (newArr.every(value => {return j%value==0})) {
        return j; 
      }
  }
  return newArr;
}
console.log(smallestCommons([1,5]));
//logs 60
//smallestCommons([2, 10]) should return 2520.