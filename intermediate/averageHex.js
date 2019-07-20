// averages two 6-digit hexadecimal values
function averageHex(hex1, hex2){
  // parseInt( ,16) converts hex to its rgb counterpart
  let r1 = parseInt(hex1.substring(0,2),16),
      g1 = parseInt(hex1.substring(2,4),16),
      b1 = parseInt(hex1.substring(4,6),16),
      r2 = parseInt(hex2.substring(0,2),16),
      g2 = parseInt(hex2.substring(2,4),16),
      b2 = parseInt(hex2.substring(4,6),16);
  
  // square the RGB values before averaging them, and then take the root of the result
  // regular averages result in a much darker color. has to do with logarithms
  let r3 = Math.round( Math.sqrt( ( Math.pow(r1,2) + Math.pow(r2,2) )/2) ), 
      g3 = Math.round( Math.sqrt( ( Math.pow(g1,2) + Math.pow(g2,2) )/2) ), 
      b3 = Math.round( Math.sqrt( ( Math.pow(b1,2) + Math.pow(b2,2) )/2) );
  
  return r3.toString(16) + g3.toString(16) + b3.toString(16);
}
console.log(averageHex('000000','ffffff')) // 'b4b4b4'
