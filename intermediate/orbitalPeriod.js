function orbitalPeriod(arr) {
  var GM = 398600.4418, earthRadius = 6367.4447, i, period;
  for (i=0; i<arr.length; i++) {
    period = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt,3)/GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = period
  }
  return arr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
//logs [{ name: "sputnik", orbitalPeriod: 86400 }]