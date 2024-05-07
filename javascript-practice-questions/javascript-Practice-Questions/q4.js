// 4. Division of two numbers

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return ("Division by zero is undefined");
  }
}
console.log(division(10, 2));
