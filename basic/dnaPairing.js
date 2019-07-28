// return dna pair
function pairElement(str) {
	let newDna = [],
		dnaAt = ['A','T'],
		dnaCg = ['C','G'],
		dnaTa = ['T','A'],
		dnaGc = ['G','C'],
		len = str.length;
	
	// find pair to return
	for (let i = 0; i < len; i++) {
		if (str[i] == 'A') {
			newDna.push(dnaAt);
		} else if (str[i] == 'C') {
			newDna.push(dnaCg);
		} else if (str[i] == 'T') {
			newDna.push(dnaTa);
		} else {
			newDna.push(dnaGc);
		} 
	}
	return newDna;
}
console.log(pairElement("GCG")); // [["G", "C"],["C", "G"],["G", "C"]]
console.log(pairElement("ATCGA")); 
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]