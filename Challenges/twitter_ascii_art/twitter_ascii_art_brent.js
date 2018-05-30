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
      if(i < 5) {
        output += "#";
          for(spaces = 0; spaces < i - 1; ++spaces) {
            output += " ";
          }
          output += "#";

          for(gap = (spaces * 2) - 6; gap < 0; ++gap) {
            output += " ";
          }
          output += "#";

          for(spaces = 0; spaces < i - 1; ++spaces) {
            output += " ";
          }
          output += "#";
          output += "\n";
      }
      else {
        output += "#";
        for(spaces = i - 8; spaces < 0; ++spaces) {
          output += " ";
        }
        output += "#";

        for(gap = (i - 5) * 2; gap > 0; --gap) {
          output += " ";
        }
        output += "#";

        for(spaces = i - 8; spaces < 0; ++spaces) {
          output += " ";
        }
        output += "#";
        output += "\n";
      }
    }
  }
  console.log(output);
}

ascii_art();
