
function diamond(letter) {
  pattern = /^[A-z]{1}$/;
  if(pattern.test(letter)) {
    let alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
     "W", "X", "Y", "Z" ];
    letter = letter.toUpperCase();
    let index = alphabet.indexOf(letter);
    let result = "";
    for(i = index; i >= 0; i--) {
      for(j = 0; j < i; j++) {
        result += " ";
      }
      result += alphabet[index - i];
      if(index - i > 0) {
        for(s = index - i; s > 0; s--) {
          result += " ";
        }
        result += alphabet[index - i] + "\n";
      }
      else {
        result += "\n";
      }
    }
    console.log(result);
  }
  else {
    return false;
  }
}

diamond("d");
