// can a note be made from a magazine clipping?
var mag1 = ['give', 'me', 'one', 'grand', 'today', 'night'];
var not1 = ['give', 'one', 'grand', 'today']; // yes
var mag2 = ['two', 'times', 'three', 'is', 'not', 'four'];
var not2 = ['two', 'times', 'two', 'is', 'four']; // no
var mag3 = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'];
var not3 = ['ive', 'got', 'some', 'coconuts']; // no
function myFunction(magazine, note) {
	var arr = [], res, i = 0;
    do {
      if (magazine.indexOf(note[i]) >= 0) {
        res = 'Yes';
        magazine.splice(magazine.indexOf(note[i]),1);
      } else res = 'No';
      i++;
    } while (i<note.length && res === 'Yes');
    return res;
}
console.log(myFunction(mag2, not2))