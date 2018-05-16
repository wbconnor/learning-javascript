function fizzbuzz (value) {
  var answerSet = ['FuzzBuzz', 'Buzz', 'Fuzz', i]
    for (var i = 1; i <= value; i++) {
        answerSet[3] = i
        j = (i % 3) ? 1 : 0
        k = (i % 5) ? 2 : 0
        console.log(`${answerSet[j+k]}`)
    }
}
fizzbuzz(20)