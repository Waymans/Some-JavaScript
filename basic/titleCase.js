// capitalizes first letter of every word
function titleCase(str) {
  var words = str.split(" ");
  for (let i=0; i<words.length; i++) {
    words[i] = words[i].toLowerCase();
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }
  return words.join(" ");
}
console.log(titleCase("hello THEre FrieND.")); // 'Hello There Friend'
console.log(titleCase("sHoRt AnD sToUt")); // 'Short And Stout'
