function titleCase(str) {
  var word = str.split(" ");
  var newWord = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      if (i == 0 && j == 0) {
        newWord += word[i][0].toUpperCase();
      }
      else if (j == 0) {
        newWord += " " + word[i][0].toUpperCase();
      } else {
        newWord += word[i][j].toLowerCase();
      }
    }
  } 
  return newWord;
}
console.log(titleCase("hello THEre FrieND."))
//logs 'Hello There Friend'
//titleCase("sHoRt AnD sToUt") should return 'Short And Stout'
