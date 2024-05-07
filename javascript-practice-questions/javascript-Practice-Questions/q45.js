// 45. Sum of even numbers in an array

function sumOfEvenNumbers(arr) {
  return;
  arr.reduce((total, num) => (num % 2 === 0 ? total + num : total), 0);
}
