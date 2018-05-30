function ascii() {
  const width = 10
  const height = 10
  let output = ''

  for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
          if (
            //x === y ||
              x === height - 1 - y ||
              x === 0 ||
              y === 0 ||
              x === width - 1 ||
              y === height -1) {
              output += '#'
          }
          else output += ' '
      }
      output += '\n'
  }

  console.log(output)
}

ascii();
