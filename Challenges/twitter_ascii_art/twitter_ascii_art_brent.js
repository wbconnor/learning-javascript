function ascii_art(){
  var output = "";
  var spaces = 0;
  for(i = 0; i <= 9; ++i) {

    if(i == 0 || i == 9) {
      for(j = 0; j <= 9; ++j) {
        output += "#";
      }
      output += "\n";
    }
    else {

        for(spaces = 0; spaces < i - 1; ++spaces) {
          output += " ";
        }
        output += "#";
        for(gap = i - 6; gap < 0; ++gap) {
          output += " ";
        }
        output += "#";
output += "\n";
output += "#";
    }
  }
  console.log(output);
}

ascii_art();
