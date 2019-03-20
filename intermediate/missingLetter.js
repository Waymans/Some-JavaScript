function fearNotLetter(str) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i=0; i<str.length; i++) {
    var newStr = abc.slice(abc.search(str[0]));
    var regex = new RegExp(newStr[i]);
    if (!regex.test(str)) {
      return newStr[i];
    }
  } 
return undefined;
}
console.log(fearNotLetter("bce"));
//logs 'd'
//fearNotLetter("stvwx") should return "u"