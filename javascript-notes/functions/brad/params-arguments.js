function registerUser(user) {
    return user + ' is registered';
}

console.log(registerUser('John'));

//defualt value before es6 bot
function registerUser1(user) {
    if (!user) {
        user = 'Bot';
    }

    return user + ' is registered'
}

console.log(registerUser1());

// ES6 default parameters
function registerUser2(user = 'Daniel') {
    if (!user) {
        user = 'Bot';
    }

    return user + ' is registered'
}

console.log(registerUser2());

// Rest Operators Params
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
// Object that we pass into the param in the upper function. 
const person = {
    id: 1,
    name: 'Daniel',
}

console.log(loginUser(person))
// input new properties within param to change values. 
console.log(loginUser({ id: '2', name: 'Megan' }));

// Arrays as params. passing an array into a param
function getRandomNum(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    
    console.log(item);
}

console.log(getRandomNum([1,8,2,3,4,6,7,9]))

// Get even number of an array using filter method
const arrayOfNums = [1,2,3,4,5,6,7,8,9];

const evenNumsOfArray = arrayOfNums.filter(number => number % 2 === 0)
console.log(evenNumsOfArray)

//! getting even number from array using a function
function getEvenNum(arr) {
for (const number of arr) {
    if ( number % 2 === 0 ){
        return number;
    }
}
return undefined;
}

const arr = [1, 3, 5, 2, 7, 9, 10];
const firstEvenNumber = getEvenNum(arr);

console.log(firstEvenNumber);
