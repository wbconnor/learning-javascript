var assert = require('assert');
var fizzbuzz = require('../fizzbuzz');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 3 should equal Fizz', function() {
      assert.equal(fizzbuzz(3), 'Fizz');
    });

    it('test 5 should equal Buzz', function() {
        assert.equal(fizzbuzz(5), 'Buzz');
      });

      it('test 15 should equal FizzBuzz', function() {
        assert.equal(fizzbuzz(15), 'FizzBuzz');
      });

      it('test 4 should equal itself', function() {
        assert.equal(fizzbuzz(4), '4');
      });
  });
});