
module.exports = function diamond(letter) {
  pattern = /^[A-z]{1}$/;
  if(pattern.test(letter)) {
    return letter = letter.toUpperCase()
  }
  else {
    return false;
  }
}