let task = [
{
taskName: 'eating',
time: '12AM',
category:'lunch'
},
{
taskName: 'drinking water',
time: '06AM',
category:'health'
},
{
taskName: 'sport',
time: '05PM',
category:'REFRESHING'
},
]
console.log(task[0].taskName);
// Define an array of objects
let fruits = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' }
];

// Adding another property to each object in the array
fruits.forEach(fruit => {
    fruit.price = 0; // Adding a price property with initial value 0
    fruit.quantity = 0; // Adding a quantity property with initial value 0
});

// Displaying the modified array of objects
console.log(fruits);
