// repeat str until its length equals n, then count a's
function countA(s, n) {
  	let amt = 0, len = s.length;
	
  	// find amount of a's in initial string
  	for (let i = 0; i < len; i++ ) {
    	s[i] === 'a' ? ++amt : null;
  	}
	
  	// get amount of a's after repetitions
  	let floor = Math.floor(n / s.length),
      	total = amt * floor,
      	remainder = n - s.length * floor,
      	newLen = s.substring(0, remainder).length;
	
  	// find remaining a's in partial string
  	for (let i = 0; i < newLen; i++ ) {
    	s[i] === 'a' ? ++total : null;
  	}
  	return total;
}
console.log(countA('aba', 10)); // 7, 'abaabaabaa'