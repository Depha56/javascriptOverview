// 8. Average of numbers in an array

function averageArray(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);

  return sum / arr.length;
}

console.log(averageArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
