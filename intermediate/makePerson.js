const Person = function(firstAndLast) {
	const name = firstAndLast.split(' ');
	
	this.setFirstName = function(first) {
		name[0] = first;
	}
	this.setLastName = function(last) {
		name[1] = last;
	}
	this.setFullName = function(firstAndLast) {
		name = firstAndLast.split(' ');
	}
	this.getFirstName = function() {
		return name[0].toString();
	}
	this.getLastName = function() {
		return name[1].toString();
	}
	this.getFullName = function() {
		return name.join(' '); 
	}
	return firstAndLast;
}
const bob = new Person('Bob Ross');
console.log(bob.getFullName()); // 'Bob Ross'
bob.setFirstName("Haskell");
console.log(bob.getFullName()); // "Haskell Ross"