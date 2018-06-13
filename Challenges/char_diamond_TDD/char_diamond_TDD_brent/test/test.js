var assert = require('assert');
var diamond = require('../char_diamond');

  // Test for valid input
  it('Test for valid input', function() {
    assert.equal(!diamond("A"), false);
  });
  // Test for failing input
  it('Test for invalid input -- one number', function() {
    assert.equal(diamond(1), false);
  });
  // Test for failing input
  it('Test for invalid input -- two letters', function() {
    assert.equal(diamond("AA"), false);
  });

// Test that lowercase gets converted to uppercase

// First letter should always be A

// Counting number of spaces before A / first letter

// Counting total number of lines for program output

// Counting number of spaces between each letter - except A

// Uppercase or lowercase letters should pass
