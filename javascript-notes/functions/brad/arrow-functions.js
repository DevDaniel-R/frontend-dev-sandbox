//! regular function
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2))

//! Arrow function
const add = (a, b) => {
    return a + b;
};

//! Implicit Return with an arrow function. This is possible when the function body consists of a single expression, and the result of that expression is automatically returned. 
const subtract = (a, b) => a - b;

console.log(add(1, 5));
console.log(subtract(1, 5));

//! Can leave off () with a single param
const double = a => a * a

console.log(double(9))

//! Returning an object 
const createObj = () => ({
    name: 'Daniel',
})

console.log(createObj())

//! forEach function
const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(function (n) {
    console.log('hi', n)
})

//! Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(numbers)