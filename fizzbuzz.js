function fizzbuzz (value) {
  var answerSet = ['FuzzBuzz', 'Buzz', 'Fuzz']
    for (var i = 1; i <= value; i++) {
        j = (i % 3) ? 1 : 0
        k = (i % 5) ? 2 : 0
        console.log(j+k === 3 ? i : `${answerSet[j+k]}`)
    }
}
fizzbuzz(20)