// FizzBuzz

exports.fizzbuzz_single = function (i) {
  var result = "";
  if (!(i % 3)) result += "Fizz";
  if (!(i % 5)) result += "Buzz";
  return result || i;
}

exports.fizzbuzz = function (input) {
  let result = "";
  for(i = 1; i < input; i++) {
    if (!(i % 3)) result += "Fizz";
    if (!(i % 5)) result += "Buzz";
    result += '\n';
  }
  return result;
}

//export { fizzbuzz_single, fizzbuzz }
