var assert = require('assert');
var fizzbuzz = require('../fizzbuzz');

describe('Testing Fizzbuzz matches', function() {
  // fizz
  it('If divisble by 3 should return Fizz', function() {
    assert.equal(fizzbuzz.fizzbuzz_single(12), "Fizz");
  });
  // buzz
  it('If divisble by 5 should return Buzz', function() {
    assert.equal(fizzbuzz.fizzbuzz_single(20), "Buzz");
  });
  // fizzbuzz
  it('If divisble by 3 and 5 should return FizzBuzz', function() {
    assert.equal(fizzbuzz.fizzbuzz_single(45), "FizzBuzz");
  });
  // number
  it('If not divisble by 3 or 5 should return the number being input', function() {
    assert.equal(fizzbuzz.fizzbuzz_single(11), 11);
  });
});
