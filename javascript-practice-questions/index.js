function Max(arr) {
  if (arr.length === 0) {
    return null; 
  }

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }

  return max;
}

function Min(arr) {
  if (arr.length === 0) {
    return null; 
  }

  let min = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; 
    }
  }

  return min;
}

const numbers = [5, 3, 9, 2, 1, 7];
const maxNumber = Max(numbers);
const minNumber = Min(numbers);

console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);
