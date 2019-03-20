function pairElement(str) {
  var newDna = [];
  var dnaAt = ['A','T'];
  var dnaCg = ['C','G'];
  var dnaTa = ['T','A'];
  var dnaGc = ['G','C'];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'A' || str[i] == 'T') {
      if (str[i] == 'A') {
        newDna.push(dnaAt);
      } else {
        newDna.push(dnaTa);
      }
    } else {
      if (str[i] == 'C') {
        newDna.push(dnaCg);
      } else {
        newDna.push(dnaGc);
      }
    } 
  }
  return newDna;
}
console.log(pairElement("GCG"));
//logs [["G", "C"],["C", "G"],["G", "C"]]
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]