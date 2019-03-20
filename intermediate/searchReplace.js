function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    var newWord = after.replace(/\w/, function (x) {return x.toUpperCase()});
    return str.replace(before, newWord);
  } else {
  return str.replace(before, after);
  }
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
//logs "He is Sitting on the couch"
//myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"