// 10. Display a pattern

function displayPattern(rows, cols) {
  let pattern = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(displayPattern(4, 4));
