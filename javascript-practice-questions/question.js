const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheap = items.filter((item) => item.price < 200);
    console.log(cheap);
// 2. Filter and show the product that will be expensive in the array
const expensive = items.filter((item) => item.price >= 200);
console.log(expensive);
// 3. Calculate the full price of all products combined
function summation() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
};
console.log("sum of all element in array is" + " " + summation());

// 4. Calculate the full price of all products combined and remove products that are under $10
const totalPriceOver10 = items.filter(item => item.price >= 10).reduce((total, item) =>
total + item.price, 0);
console.log("Total Price (Items over $10): $"+ totalPriceOver10);

// 5. Filter and show the product that will start with letter b at first position

const startsWithB = items.filter(item =>item.name.charAt(0).toLowerCase() === 'b');
console.log("Products starting with 'B': "+ startsWithB);
console.log;