// FizzBuzz

function fizzbuzz() {
  for(i = 1; i < 101; i++) {
    var modulus3 = i % 3;
    var modulus5 = i % 5;

    if(modulus3 != 0 && modulus5 != 0) {
      console.log(i);
    }
    else if(modulus3 === 0 && modulus5 === 0) {
      console.log("FizzBuzz");
    }
    else if(modulus3 === 0) {
      console.log("Fizz");
    }
    else if(modulus5 === 0) {
      console.log("Buzz");
    }
  }
}

// fizzbuzz();

// console.log('##############');
// console.log('##############');
// console.log('##############');
// console.log('##############');
// console.log('##############');
// console.log('##############');

// solution from https://stackoverflow.com/a/20647069/3954106

function fizzbuzz_two() {
  for(i = 1; i < 101; i++) {
    var result = "";
    if (!(i % 3)) result += "Fizz";
    if (!(i % 5)) result += "Buzz";
    console.log(result || i);
  }
}

// fizzbuzz_two();


function fizzbuzz_and_count() {
  var fizzCount = 0,
    buzzCount = 0,
    fizzBuzzCount = 0,
    count = 0;

  for(i = 1; i < 101; i++) {
    var modulus3 = i % 3,
      modulus5 = i % 5;

    if(modulus3 != 0 && modulus5 != 0) {
      console.log(i);
      ++count;
    }
    else if(modulus3 === 0 && modulus5 === 0) {
      console.log("FizzBuzz");
      ++fizzBuzzCount;
    }
    else if(modulus3 === 0) {
      console.log("Fizz");
      ++fizzCount;
    }
    else if(modulus5 === 0) {
      console.log("Buzz");
      ++buzzCount;
    }
  }
  console.log('<><><><><><><><><><><><>');
  console.log("Number of FizzBuzz");
  console.log(fizzBuzzCount);
  console.log("Number of Fizz");
  console.log(fizzCount);
  console.log("Number of Buzz");
  console.log(buzzCount);
  console.log("Number of indivisible");
  console.log(count);
}

fizzbuzz_and_count();
