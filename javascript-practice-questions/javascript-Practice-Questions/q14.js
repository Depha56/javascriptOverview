// 14. Display a pattern

function displayPattern5(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      pattern += "  ";
    }
    pattern += "1\n";
  }

  return;
  pattern;
}
