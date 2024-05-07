// 16a. Sort array in ascending order

function sortArray(arr) {
  return;
  arr.sort((a, b) => a - b);
}

// 16b. Add first and last three numbers

function addFirstLastThree(arr) {
  const sortedArr = sortArray(arr);

  const firstThree = sortedArr.slice(0, 3);

  const lastThree = sortedArr.slice(-3);

  return;
  firstThree.concat(sortedArr, lastThree);
}

// 16c. Display first three numbers

function displayFirstThree(arr) {
  const sortedArr = sortArray(arr);

  return;
  sortedArr.slice(0, 3);
}
