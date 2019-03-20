function convertHTML(str) {
  var entity = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }
  for (let i=0; i<str.length; i++) {
    if (entity.hasOwnProperty(str[i])) {
      str = str.replace(str[i], entity[str[i]]);
    }
  } 
  return str;
}
console.log(convertHTML("<>"));
//logs "&lt;&gt;"
//convertHTML("Sixty > twelve") should return Sixty &gt; twelve