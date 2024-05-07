
const colors = ["red", "green", "blue", "yellow", "orange"];
// //make another array of fruits
// const result = fruits.join(',').toUpperCase();
// const convert = result.split(',');
// console.log([...convert]);
// const joinedString = 
colors.join(",");
console.log("Joined String:"+ colors);

// Remove the second and third elements and replace them with 'purple' and 'pink'
colors.splice(1, 2, "purple", "pink");
console.log("add purple and pink:"+ colors);

// Copy elements from index 1 to index 3 to index 0
colors.copyWithin(0, 1, 4);
console.log("copy within:" + colors);
// Transform all elements to uppercase
const uppercase = colors.map((color) => color.toUpperCase());
console.log("upper:", uppercase);

// Find the first element that starts with 'b'
const firstBColor = colors.find((color) => color.startsWith("b"));
console.log("First color starting with 'b':", firstBColor);

// Create a new array containing elements from index 1 to index 3
const selectedColors = colors.slice(1, 4);
console.log("Selected Colors:", selectedColors);

// 3. Calculate the full price of all products combined
const sum = items.reduce((accumulator, object) => {
  return accumulator + object.price;
}, 0);
console.log('sum of all element in array is :' + sum);


