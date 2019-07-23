// does a string have a letter in another string?
function twoStrings(s1, s2) {
  	var res, i=0;
  
	do {
       if (s2.indexOf(s1[i]) >= 0) res = 'yes';
       else res = 'no';
       i++;
    } while (i<s1.length && res === 'no');
  
    return res;
}
console.log(twoStrings('hello', 'world')); // yes
console.log(twoStrings('hi', 'world')); // no