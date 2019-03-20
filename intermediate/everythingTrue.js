function truthCheck(collection, pre) {
  var i;
  for (i=0; i<collection.length; i++) {
    if (Boolean(collection[i][pre]) !== true) {
      return false;
    }
  } return true;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//logs true
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false