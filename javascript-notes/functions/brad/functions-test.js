// Todo 1.
//? Create a function call getCelsius() that takes a temp in fahrenheit as an argument and returns the temp in celsius.
//* Expected Results - console.log(getCelsius(32)); 0

//! Regular function
function getCelsiusFunc(f) {
    const celsius = (f - 32) * 5 / 9
    return celsius;
}
console.log(getCelsiusFunc(32))

const getCelsius = function(f) {
    return (f - 32) * 5 / 9
}
console.log(getCelsius(32));

//! Problem solved with text and degrees symbol
const getCelsiusDegrees = function(f) {
    return (f - 32) * 5 / 9
}
console.log(` The Temperature is ${getCelsiusDegrees(32)}\xB0 `);

//! Arrow function
 const getCelsiusNow = f => { return (f - 32) * 5 / 9 }
console.log(getCelsiusNow(32));

// Todo 2.
//? Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array
//* Expected Result - Console.log(minMax([1,2,3,4,5,6]));

const numbers = [1,2,3,4,5,6]
const smallestNumber = findSmallestNum(numbers)
const biggestNumber = findBiggestNum(numbers)

function findSmallestNum(numbers) {
    return Math.min(...numbers);
}

function findBiggestNum(numbers) {
    return Math.max(...numbers);
}
console.log(smallestNumber)
console.log(biggestNumber)

console.log(`min: ${smallestNumber} max: ${biggestNumber}`)

//* MinMax shortened
const arr = [0,55,3,4,5,6,7,]
const min = Math.min(...arr)
const max = Math.max(...arr)

const minMax = (arr) => { return `min: ${min} max: ${max}` }

console.log(minMax())

// Todo 3.
//? Create an IFEE that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
//* Expected Result - The area of a rectangle with a length of 10 and a width of 5 is 50

const area = (a, b) => a * b;
console.log(area(5, 10))


// ((length, width) => {
//     const area2 = length * width;

//     const output = `The area of rectangle with a length of ${length} and a width of ${width} is ${area2}.`;
//     console.log(output);
// })(20, 10);




