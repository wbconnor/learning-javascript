
function fizzbuzz (value) {
  var answerSet = ['FuzzBuzz', 'Buzz', 'Fuzz']
    for (var i = 1; i <= value; i++) {
        answerSet[3] = i
        j = (i % 3) ? 1 : 0
        k = (i % 5) ? 2 : 0
        console.log(`${answerSet[j+k]}`)
    }
}
fizzbuzz(20)

function fizzbuzz2 (value) {
    var answerSet = ['FuzzBuzz', 'Buzz', 'Fuzz']
      for (var i = 1; i <= value; i++) {
          answerSet[3] = i
          console.log(`${answerSet[((i % 3) ? 1 : 0) + ((i % 5) ? 2 : 0)]}`)
      }
  }

  fizzbuzz2(30)