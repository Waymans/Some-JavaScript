// string compare
var str1 = 'hello';
var com1 = 'world'; // yes
var str2 = 'hi';
var com2 = 'world'; // no
function myFunction(s1, s2) {
  	var res, i=0;
	do {
      if (s2.indexOf(s1[i]) >= 0) res = 'YES';
      else res = 'No';
      i++;
    } while (i<s1.length && res === 'NO');
    return res;
}
console.log(myFunction(str1, com1))