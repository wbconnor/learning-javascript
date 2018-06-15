var assert = require('assert');
var diamond = require('../char_diamond');

  // Test for valid input
  it('Return result is not false for valid input', function() {
    assert.equal(!diamond("A"), false);
  });
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

// length of alphabet array is 26

// First letter should always be A

// Counting number of spaces before A / first letter

// Counting total number of lines for program output

// Counting number of spaces between each letter - except A

// Uppercase or lowercase letters should pass
