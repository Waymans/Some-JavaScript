// can convert html to its entity
function convertHTML(str) {
	let entity = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&apos;'},
		len = str.length;
	for (let i = 0; i < str.length; i++) {
		if (entity.hasOwnProperty(str[i])) {
			str = str.replace(str[i], entity[str[i]]);
		}
	} 
	return str;
}
console.log(convertHTML("<>")); // &lt;&gt;
console.log(convertHTML("Joe said, 'Hi'")); // Joe said, &apos;Hi&apos;