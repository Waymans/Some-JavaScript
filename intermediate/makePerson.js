var Person = function(firstAndLast) {
  var name = firstAndLast.split(' ')
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
  };
  return firstAndLast;
};
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
//logs 'Bob Ross'
//bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")