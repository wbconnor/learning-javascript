module.exports = class Diamond {

  constructor() {
 //   this.letter = letter
  }

  validInput(letter) {
    let pattern = /^[A-z]{1}$/;
    if(pattern.test(letter)) {
      return letter.toUpperCase();
    }
    else {
      return false;
    }
  }



  createDiamond(letter) {
    letter = this.validInput(letter)
    if (letter) {
      let alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
      "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
       "W", "X", "Y", "Z" ];
      
      let index = alphabet.indexOf(letter);

      let alphabetIndex = 0
      let firstLetterPosition = 0
      let secondLetterPosition = 0  
      let result = ''    
      for (let i = 0; i < (index*2) + 1; i++) {
        firstLetterPosition = index-alphabetIndex+1
        secondLetterPosition = index+alphabetIndex+1

        for (let ii = 1; ii<secondLetterPosition+1; ii++) {
            if (ii === firstLetterPosition ||
                ii === secondLetterPosition) {
                    result = result + alphabet[alphabetIndex]
                } else 
                { 
                    result = result +  ' '
                }  
        }
        result = result +  '\n'
        alphabetIndex = i < index ? alphabetIndex + 1 : alphabetIndex - 1

      }
      // console.log(result)
      return(result)
    }
    else {
      return false;
    }
  }
  }
  
