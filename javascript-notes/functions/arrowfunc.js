function functionName() {
    return 'value';
}
// =>
// 1) Concise way for creating function
// 2) Easier working with this keyword in objects / classes

const user = {
    name: 'john',
    joined: 'May 12th, 2013'
}

// 1) Arrow functions - function expressions
// 2) All arrow functions are anonymous
// 3) No parenthesis needed when using one parameter, only when using multiple

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

// Callback function is just a function that's called after another function. So all callback functions are known as higher order functions. With a callback you can create a function argument and then it will be called back in the function it was referenced and executed in.
function greetUser(name, callback) {
    return callback(capitalize(name));
}

// Anonymous function - greetUser(user.name, function() {})

//Arrow function below
// const result = greetUser(user.name, (name) => {
//     return `Hi there ${name}`;
// })

// Shorthand of above arrow function 
const result = greetUser(user.name, (name) => { return `Hi there ${name}`});

console.log(result)