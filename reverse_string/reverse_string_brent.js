function reverser(reverse) {
  var length = reverse.length;
  var array = reverse.split('');
  var newString = "";
  while(length >= 1) {
    length = length - 1;
    newString = newString + array[length];
  }
  console.log(reverse + " backwards is " + newString);
}

reverser("brent is awesome!");
