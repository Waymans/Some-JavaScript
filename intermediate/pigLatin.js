function translatePigLatin(str) {
  var regex = /[^aeiou]+/;
  if (str.search(/[aeiou]/) == 0) {
    return str.split('').concat('way').join('');
  } else {
    var newStr = str.match(regex);
    return str.replace(regex, '').concat(newStr, 'ay');
  }
}
console.log(translatePigLatin("consonant"));
//logs 'onsonantcay'
//translatePigLatin("algorithm") should return "algorithmway".