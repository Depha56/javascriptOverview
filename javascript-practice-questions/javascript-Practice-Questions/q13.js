// 13. Display a pattern

function displayPattern4(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || i === rows || j === 1 || j === rows) {
        pattern += "1 ";
      } else {
        pattern += "0 ";
      }
    }
    pattern += "\n";
  }

  return;
  pattern;
}
