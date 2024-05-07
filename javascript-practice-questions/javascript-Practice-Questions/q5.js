// 5. Sum of all elements in an array

function arraySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
console.log(arraySum([1,2,3]));
