// does an array of objects contain all truthy values with given key?
function truthCheck(obj, key) {
	let len = obj.length;
	for (let i = 0; i < len; i++) {
		if (!obj[i][key]) {
			return false;
		}
	} 
	return true;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
						{"user": "Dipsy", "sex": "male"}, 
						{"user": "Laa-Laa", "sex": "female"}, 
						{"user": "Po", "sex": "female"}], 
					   "sex")); // true
console.log(truthCheck([{"name": "Pete", "onBoat": true}, 
						{"name": "Repeat", "onBoat": true}, 
						{"name": "FastFoward", "onBoat": null}], 
					   "onBoat")); // false

