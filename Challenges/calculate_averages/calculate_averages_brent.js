function calc() {
  var gross = 0;
  for(var i = 0; i < arguments.length; i++) {
    gross = gross + arguments[i];
  }
  var average = gross / arguments.length;
  return average;
}

console.log(calc(1, 2, 3, 4, 5));
