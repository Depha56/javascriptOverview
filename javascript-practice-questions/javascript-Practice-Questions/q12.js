// 12. Display a pattern

function displayPattern3(rows) {
  let pattern = "";
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (j === i || j === rows) {
        pattern += "1 ";
      } else {
        pattern += "0 ";
      }
    }
    pattern += "\n";
  }

  return pattern;
}
console.log(displayPattern3(5));
