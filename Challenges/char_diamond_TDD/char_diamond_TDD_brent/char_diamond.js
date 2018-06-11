module.exports = function diamond(letter) {
  pattern = /[A-z]{1}/;
  if(pattern.test(letter)) {
    return true;
  }
  else {
    return false;
  }
}
