// revised julian calender, from jan 1st of first year to second
function leaps(a,b){
  function julian(a,b,c,d){
    var start = a, end = b-1;
    for (let i=a; i%c!==d; i++){start++}
    for (let i=b-1; i%c!==d; i--){end--}
    return start<=end ? (end-start)/c +1: 0;
  }
  console.log(julian(a,b,4,0) - julian(a,b,100,0) + julian(a,b,900,200) + julian(a,b,900,600));
}
leaps(2016, 2017) //=> 1
leaps(2019, 2020) //=> 0
leaps(1900, 1901) //=> 0
leaps(2000, 2001) //=> 1
leaps(2800, 2801) //=> 0
leaps(123456, 123456) //=> 0
leaps(1234, 5678) //=> 1077
leaps(123456, 7891011) //=> 1881475
leaps(1234567891, 1314151611) // => 19276945
leaps(123456789101112, 1314151617181920) // => 288412747246240