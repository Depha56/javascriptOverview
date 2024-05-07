// 11. Display a pattern

function displayPattern2(rows) {
  let pattern = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += "1 ";
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(displayPattern2(5));
