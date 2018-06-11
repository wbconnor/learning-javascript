module.exports = function fizzbuzz (value) {
  var answerSet = ['FizzBuzz', 'Buzz', 'Fizz']

        answerSet[3] = value
        j = (value % 3) ? 1 : 0
        k = (value % 5) ? 2 : 0

        return answerSet[j+k]

}

