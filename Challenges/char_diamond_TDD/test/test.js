var assert = require('assert');
var expect = require('chai').expect;
var diamond = require('../char_diamond_steve');

const testDiamond = new diamond

  // Test for valid input
  it('Return result is false for invalid input-- AAA', function() {
    assert.equal(testDiamond.validInput("AAA"), false);
  });

  it('Return result is false for invalid input --- string of 1', function() {
    assert.equal(testDiamond.validInput("1"), false);
  });

  it('Return result is false for invalid input -- number 1', function() {
    assert.equal(testDiamond.validInput(1), false);
  });

  it('Return result is A for valid input', function() {
    assert.equal(testDiamond.validInput("A"), "A");
  });

  it('Return result is A for valid input lower case', function() {
    assert.equal(testDiamond.validInput("a"), "A");
  });

  it('Return result "A" at first position for "a"', function() {
    assert.equal(testDiamond.createDiamond("a").charAt(0), "A")
  });

  it('Return result "A" at second position for "b"', function() {
    assert.equal(testDiamond.createDiamond("b").charAt(1), "A")
  });

  it('Return result "A" at ninth position for "b"', function() {
    assert.equal(testDiamond.createDiamond("b").charAt(8), "A")
  });
  /*
  // Test for failing input
  it('Return result is false for invalid input -- one number', function() {
    assert.equal(diamond(1), false);
  });
  // Test for failing input
  it('Return result is false for invalid input -- two letters', function() {
    assert.equal(diamond("AA"), false);
  });
  // Test that lowercase gets converted to uppercase
  it('Test for that lower case is converted to upper case', function() {
    assert.equal(diamond("a"), "A");
  });
*/


// length of alphabet array is 26

// First letter should always be A

// Counting number of spaces before A / first letter

// Counting total number of lines for program output

// Counting number of spaces between each letter - except A

// Uppercase or lowercase letters should pass
